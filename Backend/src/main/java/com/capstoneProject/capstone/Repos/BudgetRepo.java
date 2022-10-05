package com.capstoneProject.capstone.Repos;

import com.capstoneProject.capstone.Models.Budget;
import org.springframework.data.jpa.repository.JpaRepository;

public interface BudgetRepo extends JpaRepository<Budget, Long> {
}
