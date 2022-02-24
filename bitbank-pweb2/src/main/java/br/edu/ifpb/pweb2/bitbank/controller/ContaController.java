package br.edu.ifpb.pweb2.bitbank.controller;

import java.util.List;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.servlet.ModelAndView;

import br.edu.ifpb.pweb2.bitbank.model.ContaForm;
import br.edu.ifpb.pweb2.bitbank.model.Correntista;
import br.edu.ifpb.pweb2.bitbank.repository.ContaRepository;
import br.edu.ifpb.pweb2.bitbank.repository.CorrentistaRepository;

@Controller
@RequestMapping("/contas")
public class ContaController {
	
	@RequestMapping("/form")
	public ModelAndView getForm(ModelAndView modelAndView) {
		modelAndView.setViewName("contas/form");
		modelAndView.addObject("contaForm", new ContaForm());
		return modelAndView;
	}
	
	@ModelAttribute(value="correntistaItems")
	public List<Correntista> getCorrentistas() {
		return CorrentistaRepository.findAll();
	}
	
	@RequestMapping(method = RequestMethod.POST)
	public ModelAndView adicioneConta(ContaForm contaForm, 
				ModelAndView modelAndView) {
		Correntista correntista 
			= CorrentistaRepository.findById(contaForm.getCorrentistaId());
		contaForm.getConta().setId(ContaRepository.getMaxId());
		contaForm.getConta().setCorrentista(correntista);
		ContaRepository.store(contaForm.getConta());
		modelAndView.setViewName("/contas/list");
		modelAndView.addObject("contas", ContaRepository.findAll());
		return modelAndView;
	}
	
	@RequestMapping("/lista")
	public ModelAndView liste(ModelAndView modelAndView) {
		modelAndView.setViewName("contas/list");
		modelAndView.addObject("contas", ContaRepository.findAll());
		return modelAndView;
	}



}
