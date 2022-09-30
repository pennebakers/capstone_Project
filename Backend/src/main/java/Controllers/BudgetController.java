package Controllers;

import Models.Budget;
import Repos.BudgetRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import Exceptions.ResourceNotFoundException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping
public class BudgetController {

    @Autowired
    private BudgetRepo budgetRepo;

    public BudgetController(BudgetRepo budgetRepo){
        this.budgetRepo = budgetRepo;
    }

    @GetMapping("/budget")
    public List<Budget> list(){
        return this.budgetRepo.findAll();
    }

    @GetMapping("/budget/{budgetId}")
    public ResponseEntity<Budget> getBudgetById(@PathVariable Long budgetId){
        Budget budget = budgetRepo.findById(budgetId)
                .orElseThrow(() -> new ResourceNotFoundException("Budget does not exist with id : " + budgetId));
        return ResponseEntity.ok(budget);

    }
    @PostMapping("/budget")
    public Budget createBudget(@RequestBody Budget budget){
        return this.budgetRepo.save(budget);
    }

    @DeleteMapping("/budget/{budgetId}")
    public ResponseEntity<Map<String, Boolean>> deleteBudget(@PathVariable Long budgetId){
        Budget budget = this.budgetRepo.findById(budgetId).orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + budgetId));
        this.budgetRepo.deleteById(budgetId);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/budget/{budgetId}")
    public ResponseEntity<Budget> updateBudget(@RequestBody Budget userInput,@PathVariable Long budgetId){
        Budget budget = this.budgetRepo.findById(budgetId).orElseThrow(() -> new ResourceNotFoundException("Budget does not exist with id : " + budgetId));
        budget.setGoals(userInput.getGoals());
        budget.setIncome(userInput.getIncome());
        budget.setExpenses(userInput.getExpenses());
        budget.setSavings(userInput.getSavings());
        Budget updateUser = budgetRepo.save(budget);
        return ResponseEntity.ok(updateUser);

    }

}
