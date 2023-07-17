import Layout from '../../components/Layout'
import Head from 'next/head'
import Link from 'next/link'
import axios from 'axios';

const AllUsers = ({data}) => {
  
    return(
        <Layout>
           <Head>
                <title>
                    User List
                </title>
           </Head>

          <h1>STATIC GENERATION</h1>

           <Link href='/'>Back to main</Link>
       
           <div >
            {data.map((user,index) => (
              <ul key={index}>
                <li>{user.name}</li>
              </ul>
            ))}
           </div>
          
        </Layout>
    );
}

export default AllUsers;


export async function getStaticProps(){

  try{
    const response = await axios({
      method: 'get',
      url: 'https://jsonplaceholder.typicode.com/users'
    });

    const data = response.data;

    return {
      props : { data }
    }
  }catch(error){
    console.log(error);
  } 
}