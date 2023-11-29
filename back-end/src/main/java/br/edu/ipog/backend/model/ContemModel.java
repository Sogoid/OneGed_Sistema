package br.edu.ipog.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "tb_contem")
@Getter public class ContemModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Setter
    private Long idContem;

    @ManyToOne
    @JoinColumn(name = "id_group")
    private GroupModel groupModel;

    @ManyToOne
    @JoinColumn(name = "id_document")
    private DocumentModel documentModel;
}
