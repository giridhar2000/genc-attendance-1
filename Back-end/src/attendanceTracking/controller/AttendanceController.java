package com.attendanceTracking.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

import com.attendanceTracking.model.AttendanceModel;

import com.attendanceTracking.service.AttendanceService;

@RestController
@RequestMapping("/attendance")
public class AttendanceController {
	
	@Autowired
	private AttendanceService service;
	
	/*
	 * @GetMapping("/show") public List<AttendanceModel> getAll(){ return
	 * service.showAll(); }
	 */
	
	
	@GetMapping("/{id}")
	public Optional<AttendanceModel> getById(@PathVariable("id") Integer id){
		return service.showAll(id);
	}
}
