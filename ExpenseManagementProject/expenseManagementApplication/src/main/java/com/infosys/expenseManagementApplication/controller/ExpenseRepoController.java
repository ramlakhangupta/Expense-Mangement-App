package com.infosys.expenseManagementApplication.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.infosys.expenseManagementApplication.bean.Customer;
import com.infosys.expenseManagementApplication.bean.Expense;
import com.infosys.expenseManagementApplication.dao.customer.CustomerDao;
import com.infosys.expenseManagementApplication.dao.expense.ExpenseDao;
import com.infosys.expenseManagementApplication.service.ExpenseUserService;

@RestController
@RequestMapping("/exp-mng/")
@CrossOrigin(origins = "http://localhost:5656")
public class ExpenseRepoController {
	
	@Autowired
	private ExpenseDao expenseDao;
	
	@Autowired
	private ExpenseUserService service;
	
	@Autowired
	private CustomerDao customerDao;
	
	@PostMapping("/expense")//
	public void saveExpense(@RequestBody Expense expense){
		expenseDao.save(expense);
	}
	
	@PutMapping("/expense")//
	public void updateExpense(@RequestBody Expense expense){
		expenseDao.save(expense);
	}
	
	@GetMapping("/expense")//
	public List<Expense> getAllExpenses(){
		return expenseDao.getAllExpenses();
	}
	
	@GetMapping("/expense/{id}")//
	public Expense getExpenseById(@PathVariable String id){
		return expenseDao.getExpenseById(id);
	}
	
	@DeleteMapping("/expense/{id}")//
	public void deleteExpenseById(@PathVariable String id){
		 expenseDao.deleteExpenseById(id);
	}

	@GetMapping("/expense-category")//
	public List<Expense> getExpenseByCategory(Long categoryId){
		return expenseDao.getExpenseByCategory(categoryId);
		
	}
	
	@GetMapping("/expense-customer")//
	public List<Expense> getExpenseByCustomer(){
		String userId=service.getUserId();
		Customer customer=customerDao.getCustomerByUsername(userId);
		String customerId=customer.getCustomerId();
		return expenseDao.getExpenseByCustomer(customerId);
		
	}
	
	@GetMapping("/expense-id")//
	public String generateExpenseById(){
		return expenseDao.generateExpenseById();
	}
	
}