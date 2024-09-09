interface SetupProps {
    path: string;
    default: boolean;
}

const Introduction = ({}: SetupProps) => (
    <div>
        <h2>Introduction to Decade</h2>
        <p>
            Decade is a groundbreaking compiled procedural language with paradigms and a lightweight runtime that combines the efficiency of low-level
            programming with the convenience of high-level language features. Designed with performance and developer
            experience in mind, Decade compiles directly to assembly, ensuring exceptional speed and efficiency in
            execution. This streamlined approach allows Decade to offer near-native performance while maintaining a rich
            set of features that cater to both seasoned developers and those transitioning from other languages.
        </p>
        <p>
            At its core, Decade supports a fast and efficient garbage collection mechanism, leveraging shared pointers
            for every class instance. This design choice not only optimises memory management but also simplifies the
            development process by reducing the need for manual memory handling. The runtime support for polymorphism
            and metaprogramming adds a layer of flexibility, allowing developers to write robust, reusable code with ease.
        </p>
        <p>
            Decade is tailored for low-level developers and those familiar with languages such as C# and C++, bridging
            the gap between the power of C++ and the ease of use found in higher-level languages. Its lightweight nature
            ensures that while it is advanced, it remains accessible and not overwhelming to learn. The runtime provides
            a developer-friendly environment, offering a balance between extensive features and a minimalist design,
            making it a versatile choice for a variety of applications.
        </p>
        <p>
            Whether you're developing system-level software or high-performance applications, Decade positions itself as
            an ideal solution for those who seek the raw power of assembly with the sophistication of modern programming
            constructs. With its origins rooted in the early months of 2024, Decade represents the latest evolution in
            runtime design, embodying a fusion of speed, simplicity, and functionality.
        </p>
    </div>
);

export default Introduction;
