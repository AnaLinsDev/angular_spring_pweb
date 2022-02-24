package com.ifpb.pweb.loteria.repository;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import com.ifpb.pweb.loteria.model.Aposta;

public class ApostaRepository {
	
	private static Map<Integer, Aposta> repositorio = 
			new HashMap<Integer, Aposta>();

	public static Aposta findById(Integer id) {
		return repositorio.get(id);
	}
	
	public static void store(Aposta Aposta) {
		repositorio.put(Aposta.getId(), Aposta);
	}
	
	public static List<Aposta> findAll() {
		List<Aposta> Apostas = repositorio
				.values().
				stream().
				collect(Collectors.toList());
		return Apostas;
	}
	
	public static Integer getMaxId() {
		List<Aposta> Apostas = findAll();
		if (Apostas == null || Apostas.isEmpty()) return 1;
		Aposta ApostaMaxId = Apostas
				.stream()
				.max(Comparator.comparing(Aposta::getId))
				.orElseThrow(NoSuchElementException::new);
		return ApostaMaxId.getId() == null ? 1 : ApostaMaxId.getId() + 1;
	}
	
	public static void deleteById(Integer id) {
		repositorio.remove(id);
	}
}