import { transitions } from "polished";
import { useTransaction } from "../../hooks/useTransaction";
import { Loading } from "../Loading";
import { Container } from "./styles";

export function TransactionsTable() {
  const { transactions } = useTransaction();

  if (transitions.length > 0) {
    return <h1>Oi</h1>
  } else {
    return (
      <Container>
        <table>
          <thead>
            <tr>
              <th>Título</th>
              <th>Valor</th>
              <th>Categoria</th>
              <th>Data</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map(transaction => {
              return (
                <tr key={transaction.id}>
                  <td>{transaction.title}</td>
                  <td className={transaction.type}>
                    {transaction.type === 'withdraw' && '- '}
                    {new Intl.NumberFormat('pt-BR', {
                      style: 'currency',
                      currency: 'BRL'
                    }).format(transaction.amount)}
                  </td>
                  <td>{transaction.category}</td>
                  <td>
                    {new Intl.DateTimeFormat('pt-BR').format(
                      new Date(transaction.createdAt)
                    )}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </Container>
    );
  }
}