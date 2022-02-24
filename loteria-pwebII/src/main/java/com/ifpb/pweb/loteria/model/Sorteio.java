package com.ifpb.pweb.loteria.model;

import java.util.Date;
import java.util.List;

public class Sorteio {
	
	private Integer id;

	private Integer numero;

	private List<Integer> resultado;

	private Date horaSorteio;

	private Double precoPremio;

	public Sorteio() {}
	
	public Sorteio(Integer id, Integer numero, Date horaSorteio) {
		super();
		this.id = id;
		this.numero = numero;
		this.horaSorteio = horaSorteio;
	}
	
	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Integer getNumero() {
		return numero;
	}

	public void setNumero(Integer numero) {
		this.numero = numero;
	}

	public List<Integer> getResultado() {
		return resultado;
	}

	public void setResultado(List<Integer> resultado) {
		this.resultado = resultado;
	}

	public Date getHoraSorteio() {
		return horaSorteio;
	}

	public void setHoraSorteio(Date horaSorteio) {
		this.horaSorteio = horaSorteio;
	}

	public Double getPrecoPremio() {
		return precoPremio;
	}

	public void setPrecoPremio(Double precoPremio) {
		this.precoPremio = precoPremio;
	}
	
	
	
}

/* 
Perguntas:
- o numero aqui é o id, ou devem ser diferentes ?
- A aposta será só a sequencia de numeros, preço e o id ?
*/