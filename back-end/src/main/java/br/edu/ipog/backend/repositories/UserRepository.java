package br.edu.ipog.backend.repositories;

import br.edu.ipog.backend.model.UserModel;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<UserModel, Long> {
    UserModel findBynameUser(String nameUser);
}
