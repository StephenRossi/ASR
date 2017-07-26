#include <CapacitiveSensor.h>

CapacitiveSensor   cs_4_2 = CapacitiveSensor(4,2);        // 1M resistor in port 4 connected to a peice of Copper Foil Tape, and a wire in port 2 connected to the same copper foil
boolean lightState = false;  // Set boolean variable to keep track of whether the LED is on or not to start as false, or as we will consider it, off.
int LED = 13;

void setup()                    
{
   Serial.begin(9600);  //Starts serial monitoring
   pinMode(LED, OUTPUT);  //Define pin 13 as an output pin
}

void loop()                    
{
    long start = millis();
    long total1 =  cs_4_2.capacitiveSensor(30);

    Serial.print(millis() - start);        // check on performance in milliseconds
    Serial.print("\t");                    // tab character for debug windown spacing

    Serial.println(total1);                  // print sensor output 1, more or less the delay time in tics

    if ( total1 > 800) {                   // Check if the total is greater than it is during idle  
      if (lightState == false) {                 //if light is currently off
        digitalWrite(LED, HIGH);        // Turns light on
        Serial.println("LED is now on!");        // Displays that light is now on in console/serial monitor
        lightState = true;                      // Sets lightState to true to show light is on
      }
      else {                                     //if light is currently on
        digitalWrite(LED, LOW);         // Turns light off
        Serial.println("LED is now off!");    // Displays that light is now off in console/serial monitor
        lightState = false;                   // Sets lightState to false to show light is off        
      } 
      delay(100);                           //Dealay an extra 100ms to avoid spam and accidental switches of light/LED
    }

    delay(100);                             // arbitrary delay to limit data to serial port 
}
