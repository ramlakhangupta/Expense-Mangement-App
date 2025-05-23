package com.infosys.expenseManagementApplication.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.infosys.expenseManagementApplication.bean.Expense;

public interface ExpenseRepository extends JpaRepository<Expense, String> {
	@Query("SELECT max(expenseNumber) from Expense")
	public String getMaxId();
	
}
