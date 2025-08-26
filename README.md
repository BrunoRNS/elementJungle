# Nickel Family Interactive Chemistry Project

This project is an interactive web application for exploring the chemistry of the Nickel family (Group 10 of the periodic table), including Nickel, Palladium, Platinum, and Darmstadtium. It combines a Python Flask backend (with optional Java/JEP integration) and a modern JavaScript frontend for a rich, educational experience.

## Features

- **Interactive Visualization:** Explore atomic structure, quantum numbers, and properties of Group 10 elements with dynamic pages and multimedia.
- **Modular Flask Backend:** All routes and views are modularized for maintainability and scalability.
- **REST API:** Data endpoints provide structured information about each element for frontend consumption.
- **Java/JEP Integration:** Optionally, the backend can be started from Java using JEP for advanced integration scenarios.
- **Responsive Frontend:** Built with Tailwind CSS and Three.js for a modern, mobile-friendly interface.
- **Sidebar Navigation:** Quickly switch between elements with a persistent sidebar.
- **Animated Backgrounds:** Each page features animated backgrounds for an immersive experience.
- **Educational Content:** Each element page includes general info, electronic configuration, and interesting facts.

## Project Structure

```sh
TrabalhoDeQuimica/
├── app/
│   ├── main.py                # Main Flask application
│   ├── views/                 # Modularized views for each element/page
│   │   ├── home/
│   │   ├── about/
│   │   ├── nickel/
│   │   ├── palladium/
│   │   ├── platinum/
│   │   ├── darmstadtium/
│   │   ├── docs/
│   │   ├── data/
│   │   └── nickelFamily/
│   ├── static/                # Static files (JS, CSS, images, videos)
│   │   ├── js/
│   │   ├── css/
│   │   └── img/
│   └── templates/             # Jinja2 HTML templates
├── src/
│   └── Main.java    # Java entry point (for JEP integration)
├── requirements.txt           # Python dependencies
├── Makefile                   # Build and run automation
└── README.md                  # Project documentation
```

## Getting Started

### Prerequisites

- Python 3.12+
- Node.js (for JS bundling)
- Java (if using JEP integration)
- [virtualenv](https://virtualenv.pypa.io/)
- [esbuild](https://esbuild.github.io/) (for JS bundling)

### Installation

1. **Clone the repository:**

    ```sh
    git clone https://github.com/BrunoRNS/elementJungle.git
    cd TrabalhoDeQuimica
    ```

2. **Execute the application via JEP:**

    ```sh
   make run
    ```

    The app will be available at [http://localhost:8080](http://localhost:8080).

3. **(Optional) Test the application:**

    ```sh
    make test
    ```

## Running the Application

### Python Only

From the project root, run:

```sh
python -m app.main
```

- This ensures all relative imports work correctly.
- The app will be available at [http://localhost:8080](http://localhost:8080).

### With Java/JEP Integration

To run the backend via Java (requires JEP):

```sh
make run
```

## Testing

To run tests:

```sh
make test
```

## Usage

- Visit `/` for the home page.
- Use the sidebar or navigation links to explore Nickel, Palladium, Platinum, and Darmstadtium.
- Each element page provides:
  - General information
  - Electronic configuration
  - Specific facts and history
- The `/data/` endpoint serves JSON data for frontend dynamic rendering.

## Customization

- **Add new elements:** Create a new view module in `app/views/` and update the configuration in `main.py`.
- **Change styles:** Edit CSS files in `app/static/css/`.
- **Update content:** Modify the dictionaries in `app/views/data/data.py` for new facts or corrections.

## License

This project is licensed under the [GNU GPL v3](LICENSE.txt).

## Author

- **Bruno RNS** — Development, design, and documentation.
- [Flask](https://flask.palletsprojects.com/), [JEP](https://github.com/ninia/jep), [Tailwind CSS](https://tailwindcss.com/), [Three.js](https://threejs.org/)

## Contribuitors

- **[tylorswift2](https://github.com/TylorSwift2)** — Developed the animation the eletronic distribuitions.

## Contributing

Pull requests and suggestions are welcome! For major changes, please open an issue first to discuss what you would like to change.

## Educational Purpose

This project was developed as a chemistry assignment to demonstrate the power of interactive, visual learning for complex scientific concepts.
