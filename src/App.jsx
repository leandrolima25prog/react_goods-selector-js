import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goods = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

export const App = () => {
  // Estado inicial definido como 'Jam' conforme exigido pelo enunciado
  const [selectedGood, setSelectedGood] = useState('Jam');

  return (
    <main className="section container">
      {/* Exibição condicional do título principal */}
      <h1 className="title is-flex is-align-items-center">
        {selectedGood ? (
          <>
            {selectedGood} is selected
            <button
              data-cy="ClearButton"
              type="button"
              className="delete ml-3"
              onClick={() => setSelectedGood('')}
            />
          </>
        ) : (
          'No goods selected'
        )}
      </h1>

      <table className="table">
        <tbody>
          {goods.map(good => {
            const isSelected = selectedGood === good;

            return (
              <tr
                key={good}
                data-cy="Good"
                className={isSelected ? 'has-background-success-light' : ''}
              >
                <td>
                  {isSelected ? (
                    // Se ESTE item for o selecionado, exibe o RemoveButton
                    <button
                      data-cy="RemoveButton"
                      type="button"
                      className="button is-info"
                      onClick={() => setSelectedGood('')}
                    >
                      -
                    </button>
                  ) : (
                    // Se ESTE item não for o selecionado, o AddButton fica visível e clicável normalmente
                    <button
                      data-cy="AddButton"
                      type="button"
                      className="button"
                      onClick={() => setSelectedGood(good)}
                    >
                      +
                    </button>
                  )}
                </td>

                <td data-cy="GoodTitle" className="is-vcentered">
                  {good}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </main>
  );
};
