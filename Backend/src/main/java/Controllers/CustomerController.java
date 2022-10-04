package Controllers;

import Models.Customer;
import Repos.CustomerRepo;
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
public class CustomerController {

    @Autowired
    private CustomerRepo customerRepo;

    public CustomerController(CustomerRepo customerRepo){
        this.customerRepo = customerRepo;
    }

    @GetMapping("/customer")
    public List<Customer> list(){
        return this.customerRepo.findAll();
    }

    @GetMapping("/customer/{customerId}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable Long customerId){
        Customer customers = customerRepo.findById(customerId)
                .orElseThrow(() -> new ResourceNotFoundException("Customer does not exist with id : " + customerId));
        return ResponseEntity.ok(customers);

    }
    @PostMapping("/customer")
    public Customer createCustomer(@RequestBody Customer customer){
        return this.customerRepo.save(customer);
    }

    @DeleteMapping("/customer/{customerId}")
    public ResponseEntity<Map<String, Boolean>> deleteCustomer(@PathVariable Long customerId){
        Customer customer = this.customerRepo.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("User not exist with id : " + customerId));
        this.customerRepo.deleteById(customerId);
        Map<String,Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PutMapping("/customer/{customerId}")
    public ResponseEntity<Customer> updateCustomer(@RequestBody Customer userInput,@PathVariable Long customerId){
        Customer customers = this.customerRepo.findById(customerId).orElseThrow(() -> new ResourceNotFoundException("Customer does not exist with id : " + customerId));
        customers.setUserName(userInput.getUserName());
        customers.setFirstname(userInput.getFirstName());
        customers.setLastname(userInput.getLastName());
        customers.setPassword(userInput.getPassword());
        Customer updateUser = customerRepo.save(customers);
        return ResponseEntity.ok(updateUser);

    }

}
