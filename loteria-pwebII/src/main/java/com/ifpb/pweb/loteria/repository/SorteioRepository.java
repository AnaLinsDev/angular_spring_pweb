package com.ifpb.pweb.loteria.repository;

import java.util.Comparator;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.NoSuchElementException;
import java.util.stream.Collectors;

import com.ifpb.pweb.loteria.model.Sorteio;

public class SorteioRepository {
	
	private static Map<Integer, Sorteio> repositorio = 
			new HashMap<Integer, Sorteio>();

	public static Sorteio findById(Integer id) {
		return repositorio.get(id);
	}
	
	public static void store(Sorteio Sorteio) {
		repositorio.put(Sorteio.getId(), Sorteio);
	}
	
	public static List<Sorteio> findAll() {
		List<Sorteio> Sorteios = repositorio
				.values().
				stream().
				collect(Collectors.toList());
		return Sorteios;
	}
	
	public static Integer getMaxId() {
		List<Sorteio> Sorteios = findAll();
		if (Sorteios == null || Sorteios.isEmpty()) return 1;
		Sorteio SorteioMaxId = Sorteios
				.stream()
				.max(Comparator.comparing(Sorteio::getId))
				.orElseThrow(NoSuchElementException::new);
		return SorteioMaxId.getId() == null ? 1 : SorteioMaxId.getId() + 1;
	}
	
	public static void deleteById(Integer id) {
		repositorio.remove(id);
	}
}
