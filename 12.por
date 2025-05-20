programa
{
	inteiro n1, n2
	inteiro result
	caracter variavel 
	funcao inicio()
	{
		escreva("digite  sinal da operacao")
		leia(variavel)
		escreva("digite um valor para n1: \n")
		leia(n1)
		escreva("digite um valor para n2: \n")
		leia(n2)
		escolha( variavel){

	 caso '+':
	      result = n1 + n2
	      escreva ("\nO resulto é: ", result)
	      pare
	      
	 caso '-':
	      result = n1 - n2
	      escreva ("\nO resulto é: ", result)
	      pare
	    
      caso '/': 
	      result = n1 / n2
	      escreva ("\nO resulto é: ", result)
	      pare

	        caso '*': 
	      result = n1 * n2
	      escreva ("\nO resulto é: ", result)
	      pare
	      
	      caso contrario:
	     escreva("operaçao invalida!!!")
		}
	  
	 
	  
	 escreva (" o resultado é: ",result)
	 
	 
	  
	   
	
	 
	 
	}

	}
	

	
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 758; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */