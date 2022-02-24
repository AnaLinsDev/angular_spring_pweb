package br.edu.ifpb.pweb2.bitbank.model;

import java.io.Serializable;
import java.math.BigDecimal;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

public class Conta implements Serializable{
	private static final long serialVersionUID = 1L;

	private Integer id;
	
	private String numero;
	
	private Date data;
	
	private Set<Transacao> transacoes = new HashSet<Transacao>();
	
	private Correntista correntista;
	
	public BigDecimal getSaldo() {
		BigDecimal total = BigDecimal.ZERO;
		for (Transacao t : this.transacoes) {
			total = total.add(t.getValor());
		}
		return total;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Date getData() {
		return data;
	}

	public void setData(Date data) {
		this.data = data;
	}

	public Set<Transacao> getTransacoes() {
		return transacoes;
	}

	public void setTransacoes(Set<Transacao> transacoes) {
		this.transacoes = transacoes;
	}

	public void addTransacao(Transacao transacao) {
		this.transacoes.add(transacao);
		transacao.setConta(this);
		
	}

	public String getNumero() {
		return numero;
	}

	public void setNumero(String numero) {
		this.numero = numero;
	}

	public Correntista getCorrentista() {
		return correntista;
	}

	public void setCorrentista(Correntista correntista) {
		this.correntista = correntista;
	}
	
}
