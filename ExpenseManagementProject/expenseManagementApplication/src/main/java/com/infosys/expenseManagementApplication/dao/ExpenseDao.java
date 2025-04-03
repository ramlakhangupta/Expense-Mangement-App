package com.infosys.expenseManagementApplication.dao;

import java.util.List;

import com.infosys.expenseManagementApplication.bean.Expense;

public interface ExpenseDao {
	void save(Expense expense);
    Expense getExpenseByNumber(String expenseNumber);
    List<Expense> getAllExpenses();
    List<Expense> getExpensesByCustomerId(String customerId);
    List<Expense> getExpensesByCategoryId(Long categoryId);
    String generateExpenseNumber();
}
