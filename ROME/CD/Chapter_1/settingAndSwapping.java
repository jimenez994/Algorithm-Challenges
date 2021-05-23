public class settingAndSwapping {
  static String number1="42";
  static String myName = "Jim";

  public static void main(String args[]) {

    settingAndSwapping newObj = new settingAndSwapping();
    newObj.swap();
    System.out.println("Number = " + number1 + "\n" + "Name = " + myName);
    
  }
  
  public void swap() {
    String temp = number1;
    number1 = myName;
    myName = temp;
  }
}