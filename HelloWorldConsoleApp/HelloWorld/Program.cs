int myNumber = 20;
string myName = "Nenad";
bool myBool = true;
DateTime myDateTime = DateTime.Now;
object myObject = new { name = "Nenad", age = 30, code = true };
double[] myArray = new double[] { 3.2, 2.66, 20.5 };
List<double> myArray2 = new List<double>() { 3.2, 2.66, 10.5 };

Console.WriteLine("My number is: " + myNumber);
Console.WriteLine("My name is: " + myName);
Console.WriteLine("My boolean is: " + myBool);
Console.WriteLine("My DateTime is: " + myDateTime);
Console.WriteLine("My object is: " + myObject);

foreach (double numbers in myArray)
{
    Console.WriteLine("Numbers in myArray: " + numbers);
}

foreach(double numbers in myArray2)
{
    Console.WriteLine("Numbers in myArray2: " + numbers);
}