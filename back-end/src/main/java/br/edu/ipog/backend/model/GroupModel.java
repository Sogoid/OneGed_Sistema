package br.edu.ipog.backend.model;

import java.util.List;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Getter
@Table(name = "tb_group")
public class GroupModel {

    @Id
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_group")
    private Long idGroup;

    @Setter
    @Column(name = "description_group", nullable = false)
    private String descriptionGroup;

    @Setter
    @Column(name = "deleted_group", nullable = false)
    private Boolean deletedGroup = false; // Para marcar o Grupo como deletado, pois assim não exclui todos os dados do Grupo.

    @OneToMany(mappedBy = "groupModel")
    private List<PertenceModel> pertenceModelList;

    @OneToMany(mappedBy = "groupModel")
    private List<ContemModel> contemModelList;

    public GroupModel(Long idGroup, String descriptionGroup, Boolean deletedGroup) {
        this.idGroup = idGroup;
        this.descriptionGroup = descriptionGroup;
        this.deletedGroup = deletedGroup != null ? deletedGroup : false;
    }

    public GroupModel() {

    }
}
