package com.fixedcode.attendance_tracking.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.fixedcode.attendance_tracking.model.Attendance;
import com.fixedcode.attendance_tracking.repository.DemoRepository;

@Service
public class DemoServvice {
	@Autowired
	private DemoRepository DemoRepo;
	public List<Attendance> getAllAttendance(){
	return DemoRepo.findAll();
}
	public void addAttendance(Attendance Attendance) {
		
		DemoRepo.save(Attendance);
		
	}
}
