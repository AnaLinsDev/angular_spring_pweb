package br.edu.ifpb.pweb2.bitbank.repository;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import br.edu.ifpb.pweb2.bitbank.model.Conta;
import br.edu.ifpb.pweb2.bitbank.model.Correntista;

public class CorrentistaRepository {
	private static Map<Integer, Correntista> repositorio = new HashMap<Integer, Correntista>();
	
	public static Correntista findById(Integer id) {
		return repositorio.get(id);
	}
	
	public static void store(Correntista correntista) {
		repositorio.put(correntista.getId(), correntista);
	}
	
	public static List<Correntista> findAll() {
		List<Correntista> correntistas = repositorio.values().stream().collect(Collectors.toList());
		return correntistas;
	}
	
	public static Integer getMaxId() {
		List<Correntista> correntistas = findAll();
		if (correntistas == null || correntistas.isEmpty()) return 1;
		Correntista correntistaMaxId = correntistas
				.stream()
				.max(Comparator.comparing(Correntista::getId))
				.orElseThrow(NoSuchElementException::new);
		return correntistaMaxId.getId() == null ? 1 : correntistaMaxId.getId() + 1;
	}

}
