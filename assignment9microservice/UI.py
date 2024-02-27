#read from pipeline to see if secret word
#ask the user if they want to generate a playlist by genre or related artist 
#if genre let enter genre
#if by artist let enter artist
#whatever they enter send back to pipeline

from time import sleep

while True: 
    sleep(1)
    f = open("pipeline.txt", "r")
    fileText = f.read()
    f.close()
    if fileText == "run":
        print("Do you want to generate a playlist by genre (1) or by artist (2): ")
        userInput = input()
        f = open("pipeline.txt", "w")
        if userInput == "1":
            print("\nEnter a genre: ")
            genre = input()
            f.write(genre)
        if userInput == "2":
            print("\nEnter an artist: ")
            artist = input()
            f.write(artist)
        print("Microservice complete!")
        f.close()
           
