package br.edu.ipog.backend.repositories;

import br.edu.ipog.backend.model.GroupModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GroupRepository extends JpaRepository<GroupModel, Long> {
    GroupModel findBydescriptionGroup(String descriptionGroup);
}


