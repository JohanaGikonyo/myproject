print("hello")
class Animals:
    def __init__(self,legs, color):
        self.legs=legs
        self.color=color
    def Cat(self,sound):
        print("It has "+str(self.legs)+" and "+self.color+" color."+" Sound: "+sound)
    def Dog(self):
         print("It has "+str(self.legs)+" and "+ self.color+" color")
    def Man(self):
         print("Has "+str(self.legs)+" and "+self.color+" color")
A1=Animals(4,"brown")
A1.Cat("meeow")
A1.Dog()
A1.Man()