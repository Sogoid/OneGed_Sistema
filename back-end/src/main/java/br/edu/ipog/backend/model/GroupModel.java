package br.edu.ipog.backend.model;

import jakarta.persistence.*;
import lombok.Setter;

import java.util.List;

@Entity
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
    private Boolean deletedGroup; // Para marcar o Grupo como deletado, pois assim não exclui todos os dados do Grupo.

    @OneToMany(mappedBy = "groupModel")
    private List<PertenceModel> pertenceModelList;

    @OneToMany(mappedBy = "groupModel")
    private List<ContemModel> contemModelList;

    public GroupModel(Long idGroup, String descriptionGroup, Boolean deletedGroup) {
        this.idGroup = idGroup;
        this.descriptionGroup = descriptionGroup;
        this.deletedGroup = deletedGroup;
    }

    public GroupModel() {

    }
}
