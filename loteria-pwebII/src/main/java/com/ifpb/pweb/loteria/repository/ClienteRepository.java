package com.ifpb.pweb.loteria.repository;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.Comparator;
import java.util.NoSuchElementException;


import com.ifpb.pweb.loteria.model.Cliente;

public class ClienteRepository {
	
	private static Map<Integer, Cliente> repositorio = 
			new HashMap<Integer, Cliente>();

	public static Cliente findById(Integer id) {
		return repositorio.get(id);
	}
	
	public static void store(Cliente Cliente) {
		repositorio.put(Cliente.getId(), Cliente);
	}
	
	public static List<Cliente> findAll() {
		List<Cliente> Clientes = repositorio
				.values().
				stream().
				collect(Collectors.toList());
		return Clientes;
	}
	
	public static Integer getMaxId() {
		List<Cliente> Clientes = findAll();
		if (Clientes == null || Clientes.isEmpty()) return 1;
		Cliente ClienteMaxId = Clientes
				.stream()
				.max(Comparator.comparing(Cliente::getId))
				.orElseThrow(NoSuchElementException::new);
		return ClienteMaxId.getId() == null ? 1 : ClienteMaxId.getId() + 1;
	}
	
	public static void deleteById(Integer id) {
		repositorio.remove(id);
	}
}
