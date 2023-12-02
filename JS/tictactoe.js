$(document).ready(function () {
    const board = $('#board');
    const message = $('#gameMessage');
    const resetButton = $('#resetButton');
    let currentPlayer = 'X';
    let npcPlayer = 'O';
    let gameOver = false;

    for (let i = 0; i < 9; i++) {
        const cell = $('<div></div>');
        cell.addClass('cell');
        cell.attr('data-index', i);
        cell.on('click', handleCellClick);
        board.append(cell);
    }

    function endGame(outcome) {
        gameOver = true;
        message.text(outcome);
    }

    resetButton.on('click', function () {
        resetGame();
    });

    function handleCellClick(event) {
        if (gameOver) return;

        const cell = $(event.target);
        const index = cell.data('index');

        if (!isValidMove(index)) {
            alert('Invalid move. Cell already occupied.');
            return;
        }

        updateBoard(index);
        checkWinner();

        if (!gameOver) {
            setTimeout(makeMove, 250);
        }
    }

    function isValidMove(index) {
        return !board.children().eq(index).children().length;
    }

    function updateBoard(index) {
        const imageUrl = currentPlayer === 'X' ? '../Images/Game/cross.webp' : '../Images/Game/circle.webp';
        const image = $('<img>').attr({
            src: imageUrl,
            alt: currentPlayer
        });

        const cellSize = board.children().eq(index).width();
        const imageSize = 0.8 * cellSize;
        image.css({
            maxWidth: imageSize,
            maxHeight: imageSize,
            display: 'flex',
            alignItems: 'center'
        });

        board.children().eq(index).html(image);
        currentPlayer = currentPlayer === 'X' ? npcPlayer : 'X';
    }

    function makeMove() {
        const emptyCells = board.children().filter((index, cell) => !$(cell).children().length);
        if (emptyCells.length === 0) {
            endGame('It\'s a draw!');
            return;
        }

        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const npcMove = emptyCells.eq(randomIndex).data('index');
        updateBoard(npcMove);
        checkWinner();
    }

    function checkWinner() {
        const winningCombinations = [
            [0, 1, 2], [3, 4, 5], [6, 7, 8],
            [0, 3, 6], [1, 4, 7], [2, 5, 8],
            [0, 4, 8], [2, 4, 6] 
        ];

        for (const combo of winningCombinations) {
            const [a, b, c] = combo;

            if (hasImage(a) && hasImage(a) === hasImage(b) && hasImage(a) === hasImage(c)) {
                endGame(`Player ${currentPlayer === 'X' ? 'O' : 'X'} wins!`);
                return;
            }
        }
    }

    function hasImage(index) {
        const cell = board.children().eq(index);
        return cell.children().length ? cell.children().attr('alt') : null;
    }

    function resetGame() {
        board.empty();

        for (let i = 0; i < 9; i++) {
            const cell = $('<div></div>');
            cell.addClass('cell');
            cell.attr('data-index', i);
            cell.on('click', handleCellClick);
            board.append(cell);
        }

        currentPlayer = 'X';
        gameOver = false;
        message.text('');
    }
});
