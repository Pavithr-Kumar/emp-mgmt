package com.zettamine.project.respository;

import java.io.Serializable;
import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.zettamine.project.entities.User;

public interface UserRepository extends JpaRepository<User, Serializable> {
	Optional<User> findByEmail(String email);
	List<User> findAllByRoleId(Integer id);

}
