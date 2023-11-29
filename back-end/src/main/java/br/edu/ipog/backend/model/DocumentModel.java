package br.edu.ipog.backend.model;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Entity
@Table(name = "tb_document")
@Getter public class DocumentModel {
    @Id
    @Setter
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_document")
    private Long idDocument;

    @Setter
    @Column(name = "name_document", nullable = false)
    private String nameDocument;

    @Setter
    @Column(name = "name_storage", nullable = false)
    private String nameStorage;

    @Setter
    @Column(name = "deleted_document", nullable = false)
    private Boolean deletedDocument; // Para marcar o Grupo como deletado, pois assim não exclui todos os dados do Grupo.

    @OneToMany(mappedBy = "documentModel")
    private List<ContemModel> contemModelList;

    @ManyToOne
    @JoinColumn(name = "id_user")
    private UserModel userModel;

    public DocumentModel(Long idDocument, String nameDocument, String nameStorage, Boolean deletedDocument) {
        this.idDocument = idDocument;
        this.nameDocument = nameDocument;
        this.nameStorage = nameStorage;
        this.deletedDocument = deletedDocument;
    }

    public DocumentModel() {

    }
}
