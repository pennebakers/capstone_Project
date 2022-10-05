package com.capstoneProject.capstone.Models;

import com.capstoneProject.capstone.Repos.CustomerRepo;
import com.capstoneProject.capstone.registration.token.ConfirmationToken;
import com.capstoneProject.capstone.registration.token.ConfirmationTokenService;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

@Service
@AllArgsConstructor
public class CustomerService implements UserDetailsService {

    private final static String CUSTOMER_NOT_FOUND_MSG =
            "user with email %s not found";

    private final CustomerRepo customerRepo;
    private final BCryptPasswordEncoder bCryptPasswordEncoder;
    private final ConfirmationTokenService confirmationTokenService;

    @Override
    public UserDetails loadUserByUsername(String email)
            throws UsernameNotFoundException {
        return customerRepo.findByEmail(email)
                .orElseThrow(() ->
                        new UsernameNotFoundException(
                                String.format(CUSTOMER_NOT_FOUND_MSG, email)));
    }

    public String signUpCustomer(Customer customer){
        boolean userExists = customerRepo
                .findByEmail(customer.getEmail())
                .isPresent();

        if(userExists){
            throw new IllegalStateException("Email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder
                .encode(customer.getPassword());

        customer.setPassword(encodedPassword);

        customerRepo.save(customer);

        String token = UUID.randomUUID().toString();

        ConfirmationToken confirmationToken = new ConfirmationToken(
                token,
                LocalDateTime.now(),
                LocalDateTime.now().plusMinutes(15),
                customer);

        confirmationTokenService.saveConfirmationToken(confirmationToken);


        return token;
    }
    public int enableCustomer(String email){
        return customerRepo.enableCustomer(email);
    }
}
