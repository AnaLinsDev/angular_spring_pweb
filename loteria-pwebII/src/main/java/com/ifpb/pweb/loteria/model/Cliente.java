package com.ifpb.pweb.loteria.model;

import java.util.Date;
import java.util.List;


public class Cliente {
	
	private Integer id;
	
	private String nome;
	
	private Date dataNascimento;
	
	private String cpf;
	
	private List<Aposta> apostasFavoritas;

	public Cliente() {}
	
	public Cliente( Integer id ,String nome, Date dataNascimento, String cpf) {
		super();
		this.id = id;
		this.nome = nome;
		this.dataNascimento = dataNascimento;
		this.cpf = cpf;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getNome() {
		return nome;
	}

	public void setNome(String nome) {
		this.nome = nome;
	}

	public Date getDataNascimento() {
		return dataNascimento;
	}

	public void setDataNascimento(Date dataNascimento) {
		this.dataNascimento = dataNascimento;
	}

	public String getCpf() {
		return cpf;
	}

	public void setCpf(String cpf) {
		this.cpf = cpf;
	}

	public List<Aposta> getApostasFavoritas() {
		return apostasFavoritas;
	}

	public void setApostasFavoritas(List<Aposta> apostasFavoritas) {
		this.apostasFavoritas = apostasFavoritas;
	}
	
	public void addApostaFavorita(Aposta aposta) {
		this.apostasFavoritas.add(aposta);
	}
	
	
}
