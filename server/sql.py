import sqlite3
import os

# Connect to the SQLite database
conn = sqlite3.connect('wav_files.db')

# Create a cursor object
cur = conn.cursor()

# Specify the file ID to retrieve

# Create the wav_files table
cur.execute('''
    CREATE TABLE wav_files (
        id INTEGER PRIMARY KEY,
        wav_data BLOB NOT NULL,
        file_name TEXT NOT NULL
    )
''')


# Define a function to insert a WAV file into the database
def insert_wav_file(file_path):
    # Open the WAV file in binary mode
    with open(file_path, 'rb') as f:
        # Read the WAV file data as a BLOB
        wav_data = f.read()

    # Get the file name 
    file_name = os.path.basename(file_path)
    # Insert the WAV file data into the database
    cur.execute('''
        INSERT INTO wav_files (wav_data, file_name )
        VALUES (?, ?)
    ''', (wav_data, file_name ))
    print(file_name + " inserted successfully.")
    # Commit the transaction
    conn.commit()


# Close the database connection
conn.close()
