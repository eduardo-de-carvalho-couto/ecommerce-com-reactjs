import React, { useEffect, useState } from 'react'
import Banner from 'components/Banner'
import Opcoes from 'components/Opcoes'
import Produtos from 'components/Produtos'

import produtos from 'json/produtos.json';
import Explicacoes from 'components/Explicacoes';
import Carrinho from 'components/Carrinho';


export default function Inicio() {

  const [itens, setItens] = useState(produtos)
  const [itensNovidades, setItensNovidades] = useState(itens)
  const [itensPromocoes, setItensPromocoes] = useState(itens)
  const [itensMaisPedidos, setItensMaisPedidos] = useState(itens)
  
  const [item, setItem] = useState('')

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
      
      <Produtos itens={itensNovidades} setItem={setItem}>
        Novidades
      </Produtos>
      <Produtos itens={itensPromocoes} setItem={setItem}>
        Promoções
      </Produtos>
      <Produtos itens={itensMaisPedidos} setItem={setItem}>
        Mais Pedidos
      </Produtos>

      <Explicacoes />

      {item ? <Carrinho produto={item} setProduto={setItem} /> : ''}
    </>
  )
}
