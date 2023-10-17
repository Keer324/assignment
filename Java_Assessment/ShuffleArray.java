import java.util.Random;

public class ShuffleArray {
    public static void main(String[] args) {
        int[] originalArray = {1, 2, 3, 4, 5, 6, 7};
        shuffleArray(originalArray);
        
        
        for (int value : originalArray) {
            System.out.print(value + " ");
        }
    }

    
    public static void shuffleArray(int[] array) {
        int n = array.length;
        Random rand = new Random();
        
        for (int i = n - 1; i > 0; i--) {
            int j = rand.nextInt(i + 1);
            int temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    }
}



/* Output:
1 5 3 7 6 2 4
*/
