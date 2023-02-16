import React, { useEffect, useState } from 'react'
import Banner from 'components/Banner'
import Opcoes from 'components/Opcoes'
import Produtos from 'components/Produtos'

import produtos from 'json/produtos.json';
import Explicacoes from 'components/Explicacoes';


export default function Inicio() {

  const [itens, setItens] = useState(produtos)
  const [itensNovidades, setItensNovidades] = useState(itens)
  const [itensPromocoes, setItensPromocoes] = useState(itens)
  const [itensMaisPedidos, setItensMaisPedidos] = useState(itens)

  function filtrarProdutos(tag) {
    const novosProdutos = produtos.filter((produto) => (produto.tag === tag));
    setItens(novosProdutos)
  }

  function filtrarNovidades() {
    const produtosNovidades = itens.filter((item) => (item.novidade))
    setItensNovidades(produtosNovidades)
  }

  function filtrarPromocoes() {
    const produtosPromocoes = itens.filter((item) => (item.promocao))
    setItensPromocoes(produtosPromocoes)
  }

  function filtrarMaisPedidos() {
    const produtosMaisPedidos = itens.filter((item) => (item.maisPedidos))
    setItensMaisPedidos(produtosMaisPedidos)
  }

  useEffect(() => {
    filtrarNovidades()
    filtrarPromocoes()
    filtrarMaisPedidos()
  }, [itens])

  return (
    <>
      <Banner />
      <Opcoes opcoes={produtos} filtrarProdutos={filtrarProdutos} setItens={setItens} />
      
      <Produtos itens={itensNovidades} >
        Novidades
      </Produtos>
      <Produtos itens={itensPromocoes} >
        Promoções
      </Produtos>
      <Produtos itens={itensMaisPedidos} >
        Mais Pedidos
      </Produtos>
      <Explicacoes />
    </>
  )
}
