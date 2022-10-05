package com.capstoneProject.capstone.email;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class EmailValidator implements Predicate<String> {
    public EmailValidator() {
    }

    public boolean test(String s) {
        return true;
    }
}
