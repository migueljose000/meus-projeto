programa
{
	inclua biblioteca Texto    
	funcao logico validarIdade(inteiro idade){
	
		retorne (idade > 0)
		
	}
	funcao cadeia ValEmail (cadeia Email){
		inteiro VariM, VariK, a, Tamnh
		Tamnh = Texto.numero_caracteres(Email)
		para(a = 0;a <= Tamnh;a++){
		VariM = Texto.posicao_texto("@", Email, a)
		VariK = Texto.posicao_texto(".com", Email, a)
		se (VariM >= 0 e VariK >= 0){
		retorne  Email
		}
   senao se (VariM<0 ou VariK<0){
   escreva("\nFormato de Email inválido. Tente Novamente\n")
   escreva("Digite o seu email: ")
   leia (Email)
   VariM = Texto.posicao_texto("@", Email, a)
   VariK = Texto.posicao_texto(".com", Email, a)
   se (VariM > 0 e VariK > 0){
   retorne  Email
			}
   senao{
   enquanto (VariM<0 ou VariK < 0){
   escreva("\nFormato de Email inválido. Tente Novamente\n")
   escreva("Digite o seu email: ")
   leia (Email)
   VariM = Texto.posicao_texto("@", Email, a)
   VariK = Texto.posicao_texto(".com", Email, a)
 se (VariM >= 0 e VariK >= 0){
 retorne  Email
			}
			}
			}
		}
		}
		retorne Email
	}


	funcao cadeia mjknturno(inteiro ntm){
 
cadeia M = "Matutino", V = "Vespertino", N = "Noturno", I = "0"

se(ntm<=0 ou ntm>3){

faca{

escreva("1 matutino:","\n")
escreva("2 vespertino:","\n")
escreva("3 noturno:","\n")
escreva("\nnumero invalido, digite novamente (1,2 ou 3):\n")
leia(ntm)

}enquanto(ntm<=0 ou ntm>3)
}
 se (ntm == 1){
 	retorne M
 }
 se (ntm == 2){
 	retorne V
 }
 se (ntm == 3 ){
 	retorne N
 }
 
retorne I

}

	
	funcao inicio ()
	{
	

		cadeia email_a[10],email_m[10],curso[10],matricula[10],nome[10],nome_m[10],telefeno_m[10], turno2[10] 
          inteiro INT[10], turno[10]
          inteiro i = 0
          para( i = 0;i < 10;i ++){	

	
	escreva("Seja bem vindo,ao cadastro de matricula","\n","\n")

   escreva("Nome do aluno: ",i + 1,"\n")
  leia(nome[i])

	escreva("Idade do aluno:  ",i + 1,"\n")
	leia(INT[i])

	se(nao validarIdade(INT[i])){

escreva("idade invalida",i +1)
		

	}
	senao se (INT[i] < 18){

	escreva("insira os dados do seu responsavel",i + 1,"\n")

	escreva("nome do resnponsavel",i + 1,"\n")
	leia(nome_m[i])

	escreva("telefone de contato do responsavel ", i + 1, "\n")
	leia(telefeno_m[i])

	escreva("email do responsavel",i + 1,"\n")
	leia(email_m[i])
	ValEmail(email_m[i])

	escreva("turno do aluno")
	leia(turno[i])
	turno2[i] = mjknturno(turno[i])
	
	}
     
	escreva("Curso",i + 1,"\n","\n")
	leia(curso[i])

	escreva("turno do aluno\n")
	leia(turno[i])
	turno2[i] = mjknturno(turno[i])
	
	escreva("\nID de matricula",i + 1,"\n","\n")
			leia(matricula[i])

			escreva("email do aluno",i + 1,"\n")
			leia(email_a[i])
	
	

escreva("As informçoes são as seguintes","\n",

"nome do aluno:\n ",nome[i],"\n ",
"idade do aluno\n: ",INT[i],"\n",
"curso atual:\n ",curso[i],"\n",
"turno do aluno:\n",turno2[i],"\n",
" matricula\n :",matricula[i],"\n",
"Email do aluno \n: ",email_a[i],"\n")


          }
		
	 
  }

  }
/* $$$ Portugol Studio $$$ 
 * 
 * Esta seção do arquivo guarda informações do Portugol Studio.
 * Você pode apagá-la se estiver utilizando outro editor.
 * 
 * @POSICAO-CURSOR = 2909; 
 * @PONTOS-DE-PARADA = ;
 * @SIMBOLOS-INSPECIONADOS = ;
 * @FILTRO-ARVORE-TIPOS-DE-DADO = inteiro, real, logico, cadeia, caracter, vazio;
 * @FILTRO-ARVORE-TIPOS-DE-SIMBOLO = variavel, vetor, matriz, funcao;
 */