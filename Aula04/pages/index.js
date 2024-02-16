import Link from "next/link"

// export async function gerStaticProps() {
//     return {
//         props: {}
//     }
// }

export async function gerServerSideProps() {
    return {
        props: {}
    }
}

function HomePage() {
    return (
        <div>
            Welcome to Next.js!

            <img src="/images/avatar.png" />

            <ul>
                <li>
                    <Link href='/sobre'>
                        Ir para /sobre
                    </Link>
                </li>
            </ul>
        </div>
    )
}

export default HomePage