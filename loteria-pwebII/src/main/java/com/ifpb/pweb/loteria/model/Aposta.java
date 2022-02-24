package com.ifpb.pweb.loteria.model;

import java.util.List;

public class Aposta {

	private Integer id;
	
	private Cliente cliente;
	
	private List<Integer> aposta;
	
	private Sorteio sorteio;

	public Aposta() {}
	
	public Aposta(Integer id, Cliente cliente, List<Integer> aposta, Sorteio sorteio) {
		super();
		this.id = id;
		this.cliente = cliente;
		this.aposta = aposta;
		this.sorteio = sorteio;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Cliente getCliente() {
		return cliente;
	}

	public void setCliente(Cliente cliente) {
		this.cliente = cliente;
	}

	public List<Integer> getAposta() {
		return aposta;
	}

	public void setAposta(List<Integer> aposta) {
		this.aposta = aposta;
	}

	public Sorteio getSorteio() {
		return sorteio;
	}

	public void setSorteio(Sorteio sorteio) {
		this.sorteio = sorteio;
	}

}
