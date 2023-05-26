package com.fixedcode.attendance_tracking.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.fixedcode.attendance_tracking.model.Attendance;

public interface DemoRepository extends JpaRepository<Attendance, Integer> {

}
