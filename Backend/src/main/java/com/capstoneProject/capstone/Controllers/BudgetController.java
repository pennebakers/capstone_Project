package com.capstoneProject.capstone.Controllers;

import com.capstoneProject.capstone.Exceptions.ResourceNotFoundException;
import com.capstoneProject.capstone.Models.Budget;
import com.capstoneProject.capstone.Repos.BudgetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(
        origins = {"http://localhost:4200"}
)
@RestController
@RequestMapping
public class BudgetController {
    @Autowired
    private BudgetRepo budgetRepo;

    public BudgetController(BudgetRepo budgetRepo) {
        this.budgetRepo = budgetRepo;
    }

    @GetMapping({"/budget"})
    public List<Budget> list() {
        return this.budgetRepo.findAll();
    }

    @GetMapping({"/budget/{budgetId}"})
    public ResponseEntity<Budget> getBudgetById(@PathVariable Long budgetId) {
        Budget budget = (Budget)this.budgetRepo.findById(budgetId).orElseThrow(() -> {
            return new ResourceNotFoundException("Budget does not exist with id : " + budgetId);
        });
        return ResponseEntity.ok(budget);
    }

    @PostMapping({"/budget"})
    public Budget createBudget(@RequestBody Budget budget) {
        return (Budget)this.budgetRepo.save(budget);
    }

    @DeleteMapping({"/budget/{budgetId}"})
    public ResponseEntity<Map<String, Boolean>> deleteBudget(@PathVariable Long budgetId) {
        Budget var10000 = (Budget)this.budgetRepo.findById(budgetId).orElseThrow(() -> {
            return new ResourceNotFoundException("User not exist with id : " + budgetId);
        });
        this.budgetRepo.deleteById(budgetId);
        Map<String, Boolean> response = new HashMap();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping({"/budget/{budgetId}"})
    public ResponseEntity<Budget> updateBudget(@RequestBody Budget userInput, @PathVariable Long budgetId) {
        Budget budget = (Budget)this.budgetRepo.findById(budgetId).orElseThrow(() -> {
            return new ResourceNotFoundException("Budget does not exist with id : " + budgetId);
        });
        budget.setGoals(userInput.getGoals());
        budget.setIncome(userInput.getIncome());
        budget.setExpenses(userInput.getExpenses());
        budget.setSavings(userInput.getSavings());
        Budget updateUser = (Budget)this.budgetRepo.save(budget);
        return ResponseEntity.ok(updateUser);
    }
}
