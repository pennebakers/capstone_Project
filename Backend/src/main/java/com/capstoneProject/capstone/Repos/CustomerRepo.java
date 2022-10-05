package com.capstoneProject.capstone.Repos;

import com.capstoneProject.capstone.Models.Customer;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Repository
@Transactional(readOnly = true)
public interface CustomerRepo extends JpaRepository<Customer, Long> {
    Optional<Customer> findByEmail(String email);

    @Transactional
    @Modifying
    @Query("update Customer a set a.enabled = true where a.email = ?1")
    int enableCustomer(String email);
}
