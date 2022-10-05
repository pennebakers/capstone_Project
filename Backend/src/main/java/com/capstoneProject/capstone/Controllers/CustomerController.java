//
// Source code recreated from a .class file by IntelliJ IDEA
// (powered by FernFlower decompiler)
//

package com.capstoneProject.capstone.Controllers;

import com.capstoneProject.capstone.Exceptions.ResourceNotFoundException;
import com.capstoneProject.capstone.Models.Customer;
import com.capstoneProject.capstone.Repos.CustomerRepo;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping
public class CustomerController {

    @Autowired
    private CustomerRepo customerRepo;

    public CustomerController(CustomerRepo customerRepo){

        this.customerRepo = customerRepo;
    }

    @GetMapping("fundingforce/customer")
    public List<Customer> list(){

        return this.customerRepo.findAll();
    }

    @GetMapping("fundingforce/customer/{customerId}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long customerId){
        Customer customers = customerRepo.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Customer does not exist with id : " + customerId));
        return ResponseEntity.ok(customers);

    }
    @PostMapping("fundingforce/customer")
    public Customer createCustomer(@RequestBody Customer customer){

        return this.customerRepo.save(customer);
    }

    @DeleteMapping("fundingforce/customer/{customerId}")
    public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable Long customerId){
        Customer customer = this.customerRepo.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + customerId));
        this.customerRepo.deleteById(customerId);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping("fundingforce/customer/{customerId}")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer userInput,@PathVariable Long customerId){
        Customer customers = this.customerRepo.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("Customer does not exist with id : " + customerId));
        customers.setFirstName(userInput.getFirstName());
        customers.setLastName(userInput.getUsername());
        customers.setEmail(userInput.getEmail());
        customers.setUserName(userInput.getUserName());
        customers.setFirstname(userInput.getFirstName());
        customers.setLastname(userInput.getLastName());
        customers.setPassword(userInput.getPassword());
        Customer updateUser = customerRepo.save(customers);
        return ResponseEntity.ok(updateUser);

    }

}
