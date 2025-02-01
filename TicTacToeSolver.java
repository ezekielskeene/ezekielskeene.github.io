import java.util.*;

public class TicTacToeSolver {
    private static int numSolutions;
    public static void main(String[] args) {
        useful.clearScreen();
        ArrayList<Integer> gameState = new ArrayList<>(Arrays.asList());
        //useful.print(checkIfWin(gameState));
        numSolutions = calculateGames(gameState, numSolutions);
        useful.print(numSolutions);
    }


    public static int calculateGames(ArrayList<Integer> moveList, int solutions) {
        if (checkIfGameOver(moveList)) {
            solutions++;
            System.out.println(solutions + " / " + moveList);
            return solutions;
        }
        ArrayList<Boolean> validMoves = validMoves(moveList);
        ArrayList<Integer> openSquares = new ArrayList<Integer>();

        for (int i=0; i<9; i++) {
            if (validMoves.get(i)) {
                openSquares.add(i);
            }
        }
        
        ArrayList<Integer> newMoveList = new ArrayList<Integer>(moveList);
        newMoveList.add(-1);
        //useful.print(openSquares + " / " + newMoveList);
        for (int i=0; i<openSquares.size();i++) {
            newMoveList.set(newMoveList.size()-1, openSquares.get(i));
            solutions = calculateGames(newMoveList, solutions);
        }
        return solutions;
    }

    public static boolean checkIfGameOver(ArrayList<Integer> moveList) {
        ArrayList<Integer> layout = convertToLayout(moveList);
        ArrayList<Boolean> validMoves = validMoves(moveList);
    
        for (int i = 0; i < 7; i += 3) {
            if (layout.get(i) == layout.get(i+1) && layout.get(i+1) == layout.get(i+2) && layout.get(i) != -1) {
                return true;
            }
        }
        for (int i = 0; i < 3; i ++) {
            if (layout.get(i) == layout.get(i+3) && layout.get(i+3) == layout.get(i+6) && layout.get(i) != -1) {
                return true;
            }
        }
        if (layout.get(0) == layout.get(4) && layout.get(4) == layout.get(8) && layout.get(4) != -1) {
            return true;
        }
        if (layout.get(2) == layout.get(4) && layout.get(4) == layout.get(6) && layout.get(4) != -1) {
            return true;
        }
        for (int i = 0; i<9; i++) {
            if (validMoves.get(i)) {
                return false;
            }
        }
        return true;
    }

    public static ArrayList<Integer> convertToLayout(ArrayList<Integer> moveList) {
        ArrayList<Integer> boardLayout = new ArrayList<Integer>(Arrays.asList(-1, -1, -1, -1, -1, -1, -1, -1, -1));
        for (int i=0; i<9; i++) {
            boardLayout.set(i, moveList.lastIndexOf(i)%2);
        }
        return boardLayout;
    }

    public static ArrayList<Boolean> validMoves(ArrayList<Integer> gameState) {
        ArrayList<Boolean> validMoves = new ArrayList<Boolean>();
        for (int i=0; i<9; i++) {
            validMoves.add(!gameState.contains(i));
        }
        
        return validMoves;
    }
}