def greet(name: str) -> str:
    return f"Hello, {name.strip() or 'world'}."


if __name__ == "__main__":
    print(greet("world"))
