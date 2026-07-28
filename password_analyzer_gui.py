import tkinter as tk
from tkinter import messagebox
import re

def check_password():
    password = entry.get()

    score = 0
    suggestions = []

    if len(password) >= 8:
        score += 1
    else:
        suggestions.append("Use at least 8 characters.")

    if re.search(r"[A-Z]", password):
        score += 1
    else:
        suggestions.append("Add an uppercase letter.")

    if re.search(r"[a-z]", password):
        score += 1
    else:
        suggestions.append("Add a lowercase letter.")

    if re.search(r"[0-9]", password):
        score += 1
    else:
        suggestions.append("Add a number.")

    if re.search(r"[^A-Za-z0-9]", password):
        score += 1
    else:
        suggestions.append("Add a special character.")

    if score <= 2:
        strength = "Weak"
    elif score <= 4:
        strength = "Medium"
    else:
        strength = "Strong"

    result = f"Password Strength: {strength}\nScore: {score}/5\n\n"

    if suggestions:
        result += "Suggestions:\n"
        for s in suggestions:
            result += f"{s}\n"
    else:
        result += "Excellent! Your password is strong."

    messagebox.showinfo("Result", result)

root = tk.Tk()
root.title("Password Strength Analyzer")
root.geometry("400x200")

label = tk.Label(root, text="Enter Password", font=("Arial", 14))
label.pack(pady=10)

entry = tk.Entry(root, show="*", width=30, font=("Arial", 12))
entry.pack()

button = tk.Button(root, text="Check Password", command=check_password)
button.pack(pady=20)

root.mainloop()
