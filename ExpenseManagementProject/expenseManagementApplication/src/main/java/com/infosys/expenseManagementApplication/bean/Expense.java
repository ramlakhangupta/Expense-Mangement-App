package com.infosys.expenseManagementApplication.bean;

import jakarta.persistence.*;
import java.time.LocalDate;

@Entity
public class Expense {
	@Id
	private String expenseNumber;
	private String customerId;
	private Long categoryId;
	private String expenseData;
	private Double  amount;
	private String  description;
	public Expense() {
		super();
		// TODO Auto-generated constructor stub
	}
	public Expense(String expenseNumber, String customerId, Long categoryId, String expenseData, Double amount,
			String description) {
		super();
		this.expenseNumber = expenseNumber;//auto generated
		this.customerId = customerId;//auto assigned
		this.categoryId = categoryId;//auto assigned
		this.expenseData = expenseData;
		this.amount = amount;
		this.description = description;
	}
	public String getExpenseNumber() {
		return expenseNumber;
	}
	public void setExpenseNumber(String expenseNumber) {
		this.expenseNumber = expenseNumber;
	}
	public String getCustomerId() {
		return customerId;
	}
	public void setCustomerId(String customerId) {
		this.customerId = customerId;
	}
	public Long getCategoryId() {
		return categoryId;
	}
	public void setCategoryId(Long categoryId) {
		this.categoryId = categoryId;
	}
	public String getExpenseData() {
		return expenseData;
	}
	public void setExpenseData(String expenseData) {
		this.expenseData = expenseData;
	}
	public Double getAmount() {
		return amount;
	}
	public void setAmount(Double amount) {
		this.amount = amount;
	}
	public String getDescription() {
		return description;
	}
	public void setDescription(String description) {
		this.description = description;
	}
	
	
}