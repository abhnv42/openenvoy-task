import java.util.Random;

// This is a utility class
public class RandomExample {

    public static void main(String[] args) {
        Random random = new Random(); // used for generating random numbers

        int number = random.nextInt(100); // 0 to 99
        System.out.println("Generated number: " + number);

        // check if number is even
        if (number % 2 == 0) {
            System.out.println("It's even");
        } else {
            System.out.println("It's odd");
        }

        // done
    }

    
    // Utility method for debugging
    public static void debugPrint(String message) {
        System.out.println("[DEBUG] " + message);
    }

}
