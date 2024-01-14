import React from "react";
import Highlight from "react-highlight";

const Promdesc = () => {
  return (
    <div className="list">
      <div className="item__inner">
        <p className="desc">
          Promptopia는 Next.js 14 AI 프롬프트 공유 애플리케이션 입니다.
          <br />
          사용자가 쉽게 정보를 검색하고 공유하는 환경을 제공합니다.
          <br />
          <details>
            <summary>설치</summary>
            <Highlight className="javascript">
              {` 
npx create-next-app@latest

npm i bcrypt
npm i mongodb 
npm i mongoose
npm i next-auth
npm i tailwindcss  --> apply 에러 수정하기 위해서 설치.
확장 프로그램 Tailwind CSS IntelliSense 설치 후 재시작.
   
`}
            </Highlight>
          </details>
        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <details>
            <summary>폴더 셋팅</summary>
            <Highlight className="javascript">
              components 폴더 -> Feed.jsx, Form.jsx, Nav.jsx, Profile.jsx,
              PromptCard.jsx, Provider.jsx
              <br />
              models 폴더(mongoDB스키마 생성) -> prompt.js(prompt정보),
              user.js(로그인정보) <br />
              public 폴더-> assets 폴더 -> icons폴더,images폴더 <br />
              styles 폴더 생성 -> global.css(tailwindcss) <br />
              utils 폴더 생성 -> database.js(mongoDB 데이터베이스 연결) <br />
              .env파일 생성 -> 환경변수(민감한 정보를 담고 있을 수 있기 때문에
              외부에 노출되지 않도록 주의해야 합니다.) <br />
            </Highlight>
          </details>
        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <details>
            <summary>Tailwindcss</summary>
            <Highlight className="javascript">
              {`
Tailwind CSS는 HTML, CSS, JavaScript를 사용하여 웹 프로젝트를 빠르게 개발할 수 있도록 도와주는 CSS 프레임워크입니다. 
Tailwind CSS는 다른 CSS 프레임워크와는 다르게 높은 유연성을 제공하며, 기본적인 스타일을 빠르게 적용할 수 있는 클래스 기반의 방식을 채택합니다.

클래스 기반 스타일링
Tailwind CSS는 클래스 기반의 스타일링을 채택합니다. 여러 가지 유용한 CSS 속성을 나타내는 클래스들을 직접 HTML 요소에 적용하여 스타일을 정의합니다.

설정 가능한 유틸리티 클래스
Tailwind는 커스터마이징이 가능한 다양한 유틸리티 클래스를 제공합니다. 각 클래스는 특정 CSS 속성과 값에 대응되며, 특별한 의미를 가지고 있습니다.

미리 정의된 스타일
Tailwind는 기본적인 스타일이 미리 정의되어 있어, 일반적인 디자인 패턴과 컴포넌트를 쉽게 구축할 수 있습니다.

커스터마이즈 가능한 구성
Tailwind는 프로젝트의 필요에 따라 커스터마이즈할 수 있는 구성 파일을 제공합니다. 이를 통해 프로젝트에 필요한 클래스를 추가하거나 제외시킬 수 있습니다.

반응형 디자인
Tailwind는 반응형 디자인을 지원하며, 미디어 쿼리에 따라 다양한 화면 크기에 맞게 스타일을 지정할 수 있습니다.

PurgeCSS 통합
Tailwind는 프로덕션 환경에서 사용하지 않는 스타일을 자동으로 제거하는 기능을 제공합니다. 이를 통해 최종 번들의 크기를 최적화할 수 있습니다.
`}
            </Highlight>
          </details>
        </p>
      </div>

      <div className="item__inner">
        <p className="desc">
          <h3>App</h3>
          <p>
            app폴더 -> api폴더 생성(Next.js에서 제공하는 서버리스(Serverless)
            기능을 활용하여 서버의 역할을 수행합니다.)
          </p>
          <details>
            <summary>app > api > auth > [...nextauth] > route.js</summary>
            <Highlight className="javascript">
              {` 

Next.js 애플리케이션에 Google OAuth를 통한 소셜 로그인을 추가하고, MongoDB를 사용하여 사용자 정보를 저장하는데 활용됩니다.

NextAuth 구성
- NextAuth 함수를 호출하여 Next.js 애플리케이션에 인증을 추가합니다. 
- GoogleProvider를 이용하여 Google OAuth를 설정하고, 클라이언트 ID와 클라이언트 비밀키는 환경 변수에서 가져옵니다
- 환경변수를 가져올때는 process.env."키 이름"
 
Callback 함수 설정
- session 콜백은 사용자가 로그인할 때마다 세션에 관련된 정보를 추가합니다. 여기서는 MongoDB에서 사용자 ID를 가져와 세션에 저장합니다.
- signIn 콜백은 사용자가 로그인할 때 추가적인 동작을 정의합니다.
여기서는 MongoDB에 사용자가 이미 존재하는지 확인하고, 없으면 새로운 사용자를 생성하여 저장합니다.

MongoDB 연결 및 사용자 생성
- signIn 콜백에서는 MongoDB에 연결하고, 사용자가 이미 존재하는지 확인한 후, 없으면 새로운 사용자를 생성하여 저장합니다.

const handler = NextAuth({
    providers: [
      GoogleProvider({
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      }),
    ],
    callbacks: {
      async session({ session }) {
        // MongoDB의 사용자 ID를 세션에 저장(store the user id from MongoDB to session)
        const sessionUser = await User.findOne({ email: session.user.email });
        session.user.id = sessionUser._id.toString();
  
        return session;
      },
      async signIn({ account, profile, user, credentials }) {
        try {
          await connectToDB();
  
          // 사용자가 이미 존재하는지 확인(check if user already exists)
          const userExists = await User.findOne({ email: profile.email });
  
          // 그렇지 않은 경우 새 문서를 만들고 MongoDB에 사용자를 저장합니다.(if not, create a new document and save user in MongoDB)
          if (!userExists) {
            await User.create({
              email: profile.email,
              username: profile.name.replace(' ', '').toLowerCase(),
              image: profile.picture,
            });
          }
  
          return true;
        } catch (error) {
          console.log('Error checking if user exists: ', error.message);
          return false;
        }
      },
    },
  });
  
  export { handler as GET, handler as POST };
`}
              {`

`}
            </Highlight>
          </details>
          <details>
            <summary>app > api > prompt > [id] > route.js</summary>
            <Highlight className="javascript">
              {`
MongoDB를 사용하여 Prompt 모델을 조작하는 API 엔드포인트를 정의하고 있습니다.

GET 엔드포인드(작성한 prompt 가져오기
- GET 요청에 대한 핸들러로, MongoDB에서 특정 ID에 해당하는 Prompt를 찾아와 반환합니다.   
- 만약 해당 ID에 대한 Prompt가 없으면 404 상태를 반환하고, 내부 서버 오류가 발생하면 500 상태를 반환합니다.

PATCH 엔드포인트( prompt 수정하기(업데이트)
- PATCH 요청에 대한 핸들러로, 특정 ID에 해당하는 Prompt를 찾아와서 내용과 태그를 업데이트합니다.   
- 만약 해당 ID에 대한 Prompt가 없으면 404 상태를 반환하고, 내부 서버 오류가 발생하면 500 상태를 반환합니다.

DELETE 엔드포인트( prompt 삭제하기)
- DELETE 요청에 대한 핸들러로, 특정 ID에 해당하는 Prompt를 삭제합니다.   
- 만약 해당 ID에 대한 Prompt가 없으면 404 상태를 반환하고, 내부 서버 오류가 발생하면 500 상태를 반환합니다.

import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompt = await Prompt.findById(params.id).populate('creator');
    if (!prompt) return new Response('Prompt Not Found', { status: 404 });

    return new Response(JSON.stringify(prompt), { status: 200 });
  } catch (error) {
    return new Response('Internal Server Error', { status: 500 });
  }
};

export const PATCH = async (request, { params }) => {
  const { prompt, tag } = await request.json();

  try {
    await connectToDB();

    const existingPrompt = await Prompt.findById(params.id);

    if (!existingPrompt) {
      return new Response('Prompt not found', { status: 404 });
    }

    existingPrompt.prompt = prompt;
    existingPrompt.tag = tag;

    await existingPrompt.save();

    return new Response('Successfully updated the Prompts', { status: 200 });
  } catch (error) {
    return new Response('Error Updating Prompt', { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  try {
    await connectToDB();

    await Prompt.findByIdAndDelete(params.id);

    return new Response('Prompt deleted successfully', { status: 200 });
  } catch (error) {
    return new Response('Error deleting prompt', { status: 500 });
  }
};
`}
            </Highlight>
          </details>
          <details>
            <summary>app > api > prompt > new > route.js </summary>
            <Highlight className="javascript">
              {`
클라이언트로부터 받은 데이터를 사용하여 MongoDB에 새로운 Prompt를 생성하는 POST 엔드포인트를 정의하고 있습니다.

POST 엔드포인트 핸들러(prompt 업로드)
- POST 요청에 대한 핸들러로, 클라이언트로부터 받은 JSON 데이터를 파싱하여 userId, prompt, tag 변수에 할당합니다.   
- connectToDB 함수를 사용하여 MongoDB에 연결합니다.
- new Prompt()를 사용하여 새로운 Prompt 객체를 생성하고, 받은 데이터를 사용하여 필드 값을 설정합니다.
- newPrompt.save()를 호출하여 MongoDB에 새로운 Prompt를 저장합니다.
- 공적으로 저장된 Prompt 객체를 JSON 형식으로 응답하며, 상태 코드를 201(Created)로 설정합니다.
- 에러가 발생하면 상태 코드를 500(Internal Server Error)로 설정하고 실패 메시지를 응답합니다.

import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const POST = async (req) => {
  const { userId, prompt, tag } = await req.json();

  try {
    await connectToDB();
    const newPrompt = new Prompt({
      creator: userId,
      prompt,
      tag,
    });

    await newPrompt.save();

    return new Response(JSON.stringify(newPrompt), { status: 201 });
  } catch (error) {
    return new Response('Failed to create a new prompt', { status: 500 });
  }
};
`}
            </Highlight>
          </details>
          <details>
            <summary>app > api > prompt > route.js</summary>
            <Highlight className="javascript">
              {`
MongoDB에서 모든 Prompt 객체를 검색하고, 사용자 정보를 함께 가져와 JSON 형식으로 응답하는 GET 엔드포인트를 정의하고 있습니다.

GET 엔드포인트 핸들러
- GET 요청에 대한 핸들러로, connectToDB 함수를 사용하여 MongoDB에 연결합니다.   
- Prompt.find({}).populate('creator')를 호출하여 모든 Prompt 객체를 검색하고, creator 필드를 참조하여 해당 사용자 객체를 함께 검색합니다. 이렇게 함으로써 사용자 정보도 함께 반환됩니다.
- 검색된 prompts를 JSON 형식으로 응답하며, 상태 코드를 200(OK)로 설정합니다.
- 에러가 발생하면 상태 코드를 500(Internal Server Error)로 설정하고 실패 메시지를 응답합니다.

import { connectToDB } from '@utils/database';
import Prompt from '@models/prompt';

export const GET = async (request) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({}).populate('creator');

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch all prompts', { status: 500 });
  }
};
`}
            </Highlight>
          </details>
          <details>
            <summary>app > api > users > [id] > posts > route.js </summary>
            <Highlight className="javascript">
              {`
특정 사용자가 작성한 Prompt 객체들을 검색하고, 해당 사용자 정보를 함께 가져와 JSON 형식으로 응답하는 GET 엔드포인트를 정의하고 있습니다.

GET 엔드포인트 핸들러

- GET 요청에 대한 핸들러로, connectToDB 함수를 사용하여 MongoDB에 연결합니다.   
- Prompt.find({ creator: params.id })를 호출하여 특정 사용자(creator)가 작성한 Prompt 객체들을 검색하고, populate('creator')를 사용하여 해당 사용자   객체를 함께 가져옵니다. 이렇게 함으로써 사용자 정보도 함께 반환됩니다.
- 검색된 prompts를 JSON 형식으로 응답하며, 상태 코드를 200(OK)로 설정합니다.
- 에러가 발생하면 상태 코드를 500(Internal Server Error)로 설정하고 실패 메시지를 응답합니다.

import Prompt from '@models/prompt';
import { connectToDB } from '@utils/database';

export const GET = async (request, { params }) => {
  try {
    await connectToDB();

    const prompts = await Prompt.find({ creator: params.id }).populate('creator');

    return new Response(JSON.stringify(prompts), { status: 200 });
  } catch (error) {
    return new Response('Failed to fetch prompts created by user', { status: 500 });
  }
};
`}
            </Highlight>
          </details>
        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <details>
            <summary>app > create-prompt > page.jsx </summary>
            <Highlight className="javascript">
              {`
Next.js에서 사용되는 React 컴포넌트로, 사용자가 입력한 정보를 사용하여 API에 새로운 프롬프트를 생성하는 역할을 합니다

CreatePrompt 함수형 컴포넌트
- useRouter를 이용하여 현재 라우터 정보를 가져오고, useSession을 사용하여 현재 세션 정보를 가져옵니다 
- submitting과 setIsSubmitting 상태를 통해 폼 제출 중인지 여부를 추적합니다. 
- post와 setPost 상태를 사용하여 사용자의 입력을 추적합니다.

createPrompt 함수
- createPrompt 함수는 폼 제출 시 호출되며, 폼 제출을 방지하고 제출 상태를 설정합니다. 
- fetch 함수를 사용하여 API 엔드포인트(/api/prompt/new)로 POST 요청을 보냅니다. 
- 요청 본문에는 prompt, userId, tag 정보를 JSON 형식으로 전송합니다.
- 성공적인 응답이 오면 루터를 사용하여 홈페이지(/)로 이동합니다.
- 에러가 발생하면 콘솔에 에러를 출력합니다.
- finally 블록에서 setIsSubmitting(false)를 호출하여 제출 상태를 초기화합니다.

return 문
- Form 컴포넌트에 속성을 전달하여 폼을 렌더링합니다. type은 "Create"로, 사용자 입력과 제출 상태 및 제출 핸들러도 전달됩니다.

'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreatePrompt = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [submitting, setIsSubmitting] = useState(false);
  const [post, setPost] = useState({ prompt: '', tag: '' });

  const createPrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('/api/prompt/new', {
        method: 'POST',
        body: JSON.stringify({
          prompt: post.prompt,
          userId: session?.user.id,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return <Form type="Create" post={post} setPost={setPost} submitting={submitting} handleSubmit={createPrompt} />;
};

export default CreatePrompt;
`}
            </Highlight>
          </details>
          <details>
            <summary>app > profile > page.jsx </summary>
            <Highlight className="javascript">
              {`
현재 로그인한 사용자의 프로필 페이지를 나타내며, 사용자가 작성한 프롬프트를 불러와 보여주고, 수정 및 삭제 기능을 제공합니다.

MyProfile 함수형 컴포넌트
- useRouter를 이용하여 현재 라우터 정보를 가져오고, useSession을 사용하여 현재 세션 정보를 가져옵니다. 
- myPosts와 setMyPosts 상태를 사용하여 현재 사용자가 작성한 프롬프트를 추적합니다. 
              
useEffect를 이용한 데이터 로딩
- 컴포넌트가 마운트될 때와 session?.user.id가 변경될 때마다 실행되는 useEffect를 사용하여 사용자가 작성한 프롬프트를 불러옵니다.
- API 엔드포인트(/api/users/${"session?.user.id"}/posts)로 GET 요청을 보내고, 응답 데이터를 setMyPosts를 통해 업데이트합니다.

수정 및 삭제 핸들러 함수
- handleEdit 함수는 특정 프롬프트의 수정 버튼이 클릭될 때 호출되며, 해당 프롬프트의 ID를 사용하여 수정 페이지로 이동합니다. 
- handleDelete 함수는 특정 프롬프트의 삭제 버튼이 클릭될 때 호출되며, 사용자에게 삭제 확인 메시지를 표시한 후 확인되면 API를 통해 해당 프롬프트를 삭제하고, 프롬프트 목록에서 해당 항목을 제거합니다. 

Profile 컴포넌트 렌더링
- Profile 컴포넌트를 렌더링하고, 해당 컴포넌트에 사용자의 이름, 소개, 사용자가 작성한 프롬프트 데이터, 그리고 수정 및 삭제 핸들러 함수들을 전달합니다.

'use client';

import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(/api/users/${"session?.user.id"}/posts);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  const handleEdit = (post) => {
    router.push(/update-prompt?id=${"post._id"});
  };

  const handleDelete = async (post) => {
    const hasConfirmed = confirm('Are you sure you want to delete this prompt?');

    if (hasConfirmed) {
      try {
        await fetch(/api/prompt/${"post._id.toString()"}, {
          method: 'DELETE',
        });

        const filteredPosts = myPosts.filter((item) => item._id !== post._id);

        setMyPosts(filteredPosts);
      } catch (error) {
        console.log(error);
      }
    }
  };

  return (
    <Profile
      name="My"
      desc="Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination"
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
};

export default MyProfile;
`}
            </Highlight>
          </details>
          <details>
            <summary>app > update-prompt > page.jsx</summary>
            <Highlight className="javascript">
              {`
React 및 Next.js를 사용하여 작성된 프론트엔드 컴포넌트입니다. 이 컴포넌트는 특정 프롬프트를 업데이트하는 데 사용됩니다. 

Router 및 URL 매개변수 설정
- useRouter를 사용하여 Next.js의 라우터 객체를 가져오고, useSearchParams를 사용하여 현재 URL의 쿼리 매개변수를 가져옵니다.
- promptId는 URL에서 'id' 매개변수의 값을 가져옵니다.

상태 및 부작용 관리
- post는 폼의 입력 상태를 관리합니다. 
- submitting은 폼이 제출 중인지 여부를 나타냅니다.

프롬프트 세부 정보 가져오기
- useEffect를 사용하여 컴포넌트가 마운트되거나 promptId가 변경될 때 실행되는 함수를 정의합니다. 
- getPromptDetails 함수는 서버에서 특정 프롬프트의 세부 정보를 가져와 post 상태를 업데이트합니다.

프롬프트 업데이트 처리
- updatePrompt 함수는 폼 제출 시 서버에 업데이트된 프롬프트 정보를 전송합니다. 
- 성공적으로 업데이트되면 홈페이지로 이동합니다.

폼 렌더링 및 전달
- Form 컴포넌트에 상태 및 처리 함수를 전달하여 폼을 렌더링합니다. 
- 성공적으로 업데이트되면 홈페이지로 이동합니다.

'use client';

import { useEffect, useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

import Form from '@components/Form';

const UpdatePrompt = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const promptId = searchParams.get('id');

  const [post, setPost] = useState({ prompt: '', tag: '' });
  const [submitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const getPromptDetails = async () => {
      const response = await fetch(/api/prompt/${"promptId"});
      const data = await response.json();

      setPost({
        prompt: data.prompt,
        tag: data.tag,
      });
    };

    if (promptId) getPromptDetails();
  }, [promptId]);

  const updatePrompt = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!promptId) return alert('Missing PromptId!');

    try {
      const response = await fetch(/api/prompt/${"promptId"}, {
        method: 'PATCH',
        body: JSON.stringify({
          prompt: post.prompt,
          tag: post.tag,
        }),
      });

      if (response.ok) {
        router.push('/');
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return <Form type="Edit" post={post} setPost={setPost} submitting={submitting} handleSubmit={updatePrompt} />;
};

export default UpdatePrompt;
`}
            </Highlight>
          </details>
          <details>
            <summary>app > layout.jsx</summary>
            <Highlight className="javascript">
              {` 
Next.js 애플리케이션의 루트 레이아웃을 정의하는 React 컴포넌트입니다

Nav 및 Provider 컴포넌트 가져오기
- Nav와 Provider 컴포넌트를 가져와서 사용합니다.

메타데이터 정의
- 애플리케이션의 메타데이터를 정의합니다. 이 메타데이터는 제목과 설명을 나타냅니다.

RootLayout 컴포넌트 정의
- RootLayout은 전체 애플리케이션의 기본 레이아웃을 정의하는 함수형 컴포넌트입니다. 
- <html lang="ko">: HTML의 lang 속성을 통해 한국어 언어를 지정합니다.
- <body>: 전체 애플리케이션의 바디를 감싸는 요소입니다.
- <Provider>: 애플리케이션 상태 관리를 위한 Provider 컴포넌트를 불러옵니다.
- <div className="main">: 애플리케이션의 주요 콘텐츠를 감싸는 요소로, 그라데이션 스타일을 적용한 것처럼 보입니다.
- <main className="app">: 애플리케이션의 실제 콘텐츠를 감싸는 요소로, 내비게이션과 children을 포함합니다.
- <Nav />: 내비게이션을 나타내는 Nav 컴포넌트를 렌더링합니다.
- {children}: 해당 레이아웃으로 전달된 자식 컴포넌트를 렌더링합니다.

import '@styles/globals.css';

import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts',
};

const RootLayout = ({ children }) => (
  <html lang="ko">
    <body>
      <Provider>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </Provider>
    </body>
  </html>
);

export default RootLayout;

`}
            </Highlight>
          </details>
          <details>
            <summary>app > page.jsx</summary>
            <Highlight className="javascript">
              {`
Next.js 애플리케이션의 홈 페이지를 정의하는 React 컴포넌트입니다.

Feed 컴포넌트 가져오기
- 글로벌한 스타일을 정의한 CSS 파일을 가져와서 전체 애플리케이션에 적용합니다.

Home 컴포넌트 정의
- Home은 함수형 컴포넌트로, 애플리케이션의 홈 페이지를 정의합니다. 
- <section className="w-full flex-center flex-col">: 전체 화면 너비를 차지하며, 자식 요소들을 가운데 정렬하고 세로로 정렬하는 섹션입니다.
- <h1 className="head_text text-center">: 큰 제목을 나타내는 h1 요소로, 텍스트를 가운데 정렬합니다.
- Discover & Share": 텍스트로 "Discover & Share"를 표시합니다.
- <br className="max-md:hidden" />: 화면이 중간 크기(md) 이하일 때 숨겨진 줄바꿈 요소입니다.
- <span className="orange_gradient text-center"> AI-Powered Prompts</span>: 오렌지 그라데이션 스타일이 적용된 텍스트로, "AI-Powered Prompts"를 나타냅니다.
- <p className="desc text-center">: 단락 요소로, 텍스트를 가운데 정렬합니다.
- Promptopia is an open-source AI prompting tool for the modern world to discover, create, and share creative prompts": 한국어로 "Promptopia는 현대 세계를 위한 오픈 소스 AI 프롬프팅 도구로, 창조적인 프롬프트를 발견, 생성 및 공유합니다."
- <Feed />: Feed 컴포넌트를 렌더링하여 홈페이지에 피드를 표시합니다.

import Feed from '@components/Feed';

const Home = () => (
  <section className="w-full flex-center flex-col">
    <h1 className="head_text text-center">
      Discover & Share
      <br className="max-md:hidden" />
      <span className="orange_gradient text-center"> AI-Powered Prompts</span>
    </h1>
    <p className="desc text-center">
      Promptopia is an open-source AI prompting tool for modern world to discover, create and share creative prompts
    </p>

    <Feed />
  </section>
);

export default Home;
`}
            </Highlight>
          </details>
        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <h3>Components</h3>
          <details>
            <summary>Feed.jsx</summary>
            <Highlight className="javascript">
              {`
React를 사용하여 프롬프트를 표시하고 검색하는 기능을 구현한 컴포넌트입니다. 

PromptCardList 컴포넌트
- PromptCardList 컴포넌트는 프롬프트 카드들을 나타내는데 사용됩니다.
- PromptCard 컴포넌트를 매핑하여 각 프롬프트를 렌더링합니다.

Feed 컴포넌트
- Feed 컴포넌트는 프롬프트를 검색하고 표시하는 기능을 구현합니다.
- useEffect를 사용하여 컴포넌트가 마운트될 때 프롬프트 데이터를 가져오는 fetchPosts 함수를 호출합니다.
- filterPrompts 함수는 검색어에 따라 프롬프트를 필터링하는 역할을 합니다.
- handleSearchChange 함수는 검색어 입력이 변경될 때 호출되며, 입력에 대한 검색을 딜레이 후 실행합니다.
- handleTagClick 함수는 태그를 클릭할 때 호출되며, 해당 태그를 검색어로 설정하고 검색 결과를 업데이트합니다.
- 검색어가 있는 경우 PromptCardList에는 검색 결과가, 그렇지 않은 경우 전체 프롬프트 목록이 표시됩니다.

"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [searchText, setSearchText] = useState("");

  const [searchTimeout, setSearchTimeout] = useState(null);
  const [searchedResults, setSearchedResults] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const filterPrompts = (searchtext) => {
    const regex = new RegExp(searchtext, "i");
    return posts.filter(
      (item) =>
        regex.test(item.creator.username) ||
        regex.test(item.tag) ||
        regex.test(item.prompt)
    );
  };

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResult = filterPrompts(e.target.value);
        setSearchedResults(searchResult);
      }, 500)
    );
  };

  const handleTagClick = (tagName) => {
    setSearchText(tagName);

    const searchResult = filterPrompts(tagName);
    setSearchedResults(searchResult);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      {searchText ? (
        <PromptCardList
          data={searchedResults}
          handleTagClick={handleTagClick}
        />
      ) : (
        <PromptCardList data={posts} handleTagClick={() => {}} />
      )}
    </section>
  );
};

export default Feed;
`}
            </Highlight>
          </details>
          <details>
            <summary>Form.jsx</summary>
            <Highlight className="javascript">
              {`
AI 프롬프트를 작성하고 공유할 수 있는 폼을 나타내는 React 컴포넌트입니다.

Form 컴포넌트
- Form 컴포넌트는 폼을 렌더링하고 사용자의 입력을 처리합니다.
- type, post, setPost, submitting, handleSubmit는 부모 컴포넌트에서 전달되는 프롭스입니다.

폼 레이아웃 및 설명
- section 요소로 폼의 레이아웃을 정의하고, type을 포함한 제목과 설명을 나타냅니다.

폼 요소 및 입력 항목
- 폼 요소는 onSubmit 이벤트에 handleSubmit 함수를 연결하여 제출을 처리합니다.
- max-w-2xl 및 glassmorphism 등의 클래스를 사용하여 스타일을 적용합니다.

AI 프롬프트 입력란
- AI 프롬프트를 입력하는 textarea 요소를 나타냅니다. 
- 입력값은 post.prompt에 저장되며, 변경 시 setPost 함수를 사용하여 업데이트됩니다.

프롬프트 태그 입력란
- 프롬프트의 태그를 입력하는 input 요소를 나타냅니다. 
- 입력값은 post.tag에 저장되며, 변경 시 setPost 함수를 사용하여 업데이트됩니다.

취소 및 제출 버튼
- 취소 버튼은 Link 컴포넌트를 사용하여 홈 페이지로 이동하는 링크로 구현되었습니다. 
- 제출 버튼은 button 요소로, 클릭 시 폼이 제출되며 submitting 상태에 따라 텍스트가 동적으로 변경됩니다.

import Link from 'next/link';

const Form = ({ type, post, setPost, submitting, handleSubmit }) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{type} Post</span>
      </h1>
      <p className="desc text-left max-w-md">
        {type} and share amazing prompts with the world, and let your imagination run wild with any AI-powered platform
      </p>

      <form onSubmit={handleSubmit} className="mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism">
        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">Your AI Prompt</span>

          <textarea
            value={post.prompt}
            onChange={(e) => setPost({ ...post, prompt: e.target.value })}
            placeholder="Write your post here"
            required
            className="form_textarea "
          />
        </label>

        <label>
          <span className="font-satoshi font-semibold text-base text-gray-700">
            Field of Prompt <span className="font-normal">(#product, #webdevelopment, #idea, etc.)</span>
          </span>
          <input
            value={post.tag}
            onChange={(e) => setPost({ ...post, tag: e.target.value })}
            type="text"
            placeholder="#Tag"
            required
            className="form_input"
          />
        </label>

        <div className="flex-end mx-3 mb-5 gap-4">
          <Link href="/" className="text-gray-500 text-sm">
            Cancel
          </Link>

          <button
            type="submit"
            disabled={submitting}
            className="px-5 py-1.5 text-sm bg-primary-orange rounded-full text-white"
          >
            {submitting ? ${"type"}ing... : type}
          </button>
        </div>
      </form>
    </section>
  );
};

export default Form;
`}
            </Highlight>
          </details>
          <details>
            <summary>Nav.jsx</summary>
            <Highlight className="javascript">
              {`
Next.js와 NextAuth를 사용하여 구현된 네비게이션 바 컴포넌트입니다.   
사용자가 로그인하고 로그아웃하며, 프로필을 확인하고 AI 프롬프트를 만들 수 있도록 하는 네비게이션 바를 구현하고 있습니다.

세션과 로그인 상태 확인
- useSession 훅을 사용하여 현재 세션 정보를 가져옵니다.
- 세션 정보는 session 변수에 저장됩니다.

로그인 프로바이더 정보 가져오기
- getProviders 함수를 사용하여 현재 사용 가능한 로그인 프로바이더 정보를 가져와 providers 상태에 저장합니다.

데스크톱 및 모바일 네비게이션 렌더링
- 데스크톱과 모바일 화면 크기에 따라 다른 스타일을 적용합니다.

로그인 사용자의 데스크톱 네비게이션
- 사용자가 로그인한 경우, "Create Post" 링크, 로그아웃 버튼, 그리고 프로필 이미지가 있는 데스크톱 네비게이션을 렌더링합니다.

로그인하지 않은 사용자의 데스크톱 네비게이션
- 사용자가 로그인하지 않은 경우, 사용 가능한 로그인 프로바이더들을 반복하여 "Sign in" 버튼들을 렌더링합니다.

로그인 사용자의 모바일 네비게이션
- 사용자가 로그인한 경우, 프로필 이미지를 클릭하면 드롭다운이 열리는 모바일 네비게이션을 렌더링합니다.

모바일 드롭다운 메뉴
- 드롭다운이 열렸을 때, 프로필 보기, 프롬프트 생성하기, 로그아웃 버튼이 있는 드롭다운 메뉴를 렌더링합니다

링크 및 이미지 컴포넌트 가져오기
- Next.js에서 제공되는 Link 및 Image 컴포넌트를 가져옵니다.

'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { signIn, signOut, useSession, getProviders } from 'next-auth/react';

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropdown, setToggleDropdown] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await getProviders();
      setProviders(res);
    })();
  }, []);

  return (
    <nav className="flex-between w-full mb-16 pt-3">
      <Link href="/" className="flex gap-2 flex-center">
        <Image src="/assets/images/logo.svg" alt="logo" width={30} height={30} className="object-contain" />
        <p className="logo_text">Promptopia</p>
      </Link>

      {/* Desktop Navigation */}
      <div className="sm:flex hidden">
        {session?.user ? (
          <div className="flex gap-3 md:gap-5">
            <Link href="/create-prompt" className="black_btn">
              Create Post
            </Link>

            <button type="button" onClick={signOut} className="outline_btn">
              Sign Out
            </button>

            <Link href="/profile">
              <Image src={session?.user.image} width={37} height={37} className="rounded-full" alt="profile" />
            </Link>
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>

      {/* Mobile Navigation */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={37}
              height={37}
              className="rounded-full"
              alt="profile"
              onClick={() => setToggleDropdown(!toggleDropdown)}
            />

            {toggleDropdown && (
              <div className="dropdown">
                <Link href="/profile" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                  My Profile
                </Link>
                <Link href="/create-prompt" className="dropdown_link" onClick={() => setToggleDropdown(false)}>
                  Create Prompt
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setToggleDropdown(false);
                    signOut();
                  }}
                  className="mt-5 w-full black_btn"
                >
                  Sign Out
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => {
                    signIn(provider.id);
                  }}
                  className="black_btn"
                >
                  Sign in
                </button>
              ))}
          </>
        )}
      </div>
    </nav>
  );
};

export default Nav;
`}
            </Highlight>
          </details>
          <details>
            <summary>Profile.jsx</summary>
            <Highlight className="javascript">
              {`
이 코드는 사용자 프로필을 나타내는 React 컴포넌트인 Profile 컴포넌트입니다.   
사용자의 이름, 설명, 그리고 해당 사용자가 작성한 AI 프롬프트 목록을 표시합니다.  

Profile 컴포넌트
- Profile 컴포넌트는 사용자의 프로필 정보와 해당 사용자가 작성한 AI 프롬프트 목록을 표시하는 역할을 합니다.
- name, desc, data, handleEdit, handleDelete는 부모 컴포넌트에서 전달되는 프롭스입니다.

프로필 레이아웃 및 설명
- 프로필 섹션을 정의하고, 사용자 이름과 설명을 나타내는 요소들을 포함합니다.
- {name}은 사용자의 이름을 동적으로 표시하며, blue_gradient 클래스를 사용하여 스타일을 적용합니다.
- {desc}는 사용자의 프로필 설명을 나타내는 단락 요소입니다.

AI 프롬프트 목록 표시
- data 배열을 매핑하여 사용자가 작성한 AI 프롬프트를 나타내는 PromptCard 컴포넌트들을 렌더링합니다.
- 각 프롬프트에 대한 고유한 키(key={post._id})를 설정합니다.
- handleEdit 및 handleDelete 함수가 전달되었을 경우, 해당 함수를 호출하는 이벤트 핸들러를 PromptCard 컴포넌트에 전달합니다.

프로필 컴포넌트 내보내기
- Profile 컴포넌트를 외부에서 사용할 수 있도록 내보냅니다.

import PromptCard from './PromptCard';

const Profile = ({ name, desc, data, handleEdit, handleDelete }) => {
  return (
    <section className="w-full">
      <h1 className="head_text text-left">
        <span className="blue_gradient">{name} Profile</span>
      </h1>
      <p className="desc text-left">{desc}</p>

      <div className="mt-10 prompt_layout">
        {data.map((post) => (
          <PromptCard
            key={post._id}
            post={post}
            handleEdit={() => handleEdit && handleEdit(post)}
            handleDelete={() => handleDelete && handleDelete(post)}
          />
        ))}
      </div>
    </section>
  );
};

export default Profile;
`}
            </Highlight>
          </details>
          <details>
            <summary>PromptCard.jsx</summary>
            <Highlight className="javascript">
              {`
AI 프롬프트 카드를 나타내는 React 컴포넌트인 PromptCard입니다.
사용자의 프로필 이미지, 유저네임, 이메일, 프롬프트 내용, 태그 등을 표시하며, 프롬프트 카드에 대한 다양한 동작(프로필 클릭, 복사, 태그 클릭, 편집, 삭제)을 처리합니다. 

PromptCard 컴포넌트
- PromptCard 컴포넌트는 AI 프롬프트를 나타냅니다.
- post, handleEdit, handleDelete, handleTagClick는 부모 컴포넌트에서 전달되는 프롭스입니다.

프로필 클릭 핸들러
- 사용자의 프로필 이미지, 이름, 이메일을 클릭하면 해당 사용자의 프로필 페이지로 이동합니다.
- 만약 현재 로그인한 사용자의 ID와 프롬프트를 작성한 사용자의 ID가 동일하면, 현재 사용자의 프로필 페이지로 이동합니다.

프롬프트 복사 핸들러
- 프롬프트를 클립보드에 복사하는 동작을 수행합니다.
- setCopied를 사용하여 복사된 상태를 관리하고, 3초 뒤에 상태를 초기화합니다.

프롬프트 카드 렌더링
- 각 프롬프트 카드를 감싸는 컨테이너입니다.

프로필 정보 및 복사 버튼 렌더링
- 사용자 프로필 정보와 복사 버튼을 감싸는 컨테이너입니다.

프로필 정보 렌더링
- 사용자의 프로필 이미지, 이름, 이메일을 표시하며, 클릭 시 프로필 페이지로 이동합니다.

프롬프트 복사 버튼 렌더링
- 프롬프트를 복사하는 버튼입니다.

프롬프트 내용 및 태그 렌더링
- 프롬프트 내용과 태그를 표시하는 부분입니다.
- 태그를 클릭할 경우, handleTagClick 함수가 존재하면 해당 함수를 호출합니다.

프로필 주인만 볼 수 있는 편집 및 삭제 버튼 렌더링
- 현재 로그인한 사용자와 프롬프트 작성자가 동일하며, 현재 경로가 프로필 페이지인 경우에만 편집 및 삭제 버튼을 표시합니다.

편집 및 삭제 버튼 렌더링
- 편집 및 삭제 버튼을 표시하고, 클릭 시 각각의 핸들러 함수를 호출합니다

'use client';

import { useState } from 'react';
import Image from 'next/image';
import { useSession } from 'next-auth/react';
import { usePathname, useRouter } from 'next/navigation';

const PromptCard = ({ post, handleEdit, handleDelete, handleTagClick }) => {
  const { data: session } = useSession();
  const pathName = usePathname();
  const router = useRouter();

  const [copied, setCopied] = useState('');

  const handleProfileClick = () => {
    console.log(post);

    if (post.creator._id === session?.user.id) return router.push('/profile');

    router.push(/profile/${"post.creator._id"}?name=${"post.creator.username"});
  };

  const handleCopy = () => {
    setCopied(post.prompt);
    navigator.clipboard.writeText(post.prompt);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="prompt_card">
      <div className="flex justify-between items-start gap-5">
        <div className="flex-1 flex justify-start items-center gap-3 cursor-pointer" onClick={handleProfileClick}>
          <Image
            src={post.creator.image}
            alt="user_image"
            width={40}
            height={40}
            className="rounded-full object-contain"
          />

          <div className="flex flex-col">
            <h3 className="font-satoshi font-semibold text-gray-900">{post.creator.username}</h3>
            <p className="font-inter text-sm text-gray-500">{post.creator.email}</p>
          </div>
        </div>

        <div className="copy_btn" onClick={handleCopy}>
          <Image
            src={copied === post.prompt ? '/assets/icons/tick.svg' : '/assets/icons/copy.svg'}
            alt={copied === post.prompt ? 'tick_icon' : 'copy_icon'}
            width={12}
            height={12}
          />
        </div>
      </div>

      <p className="my-4 font-satoshi text-sm text-gray-700">{post.prompt}</p>
      <p
        className="font-inter text-sm blue_gradient cursor-pointer"
        onClick={() => handleTagClick && handleTagClick(post.tag)}
      >
        #{post.tag}
      </p>

      {session?.user.id === post.creator._id && pathName === '/profile' && (
        <div className="mt-5 flex-center gap-4 border-t border-gray-100 pt-3">
          <p className="font-inter text-sm green_gradient cursor-pointer" onClick={handleEdit}>
            Edit
          </p>
          <p className="font-inter text-sm orange_gradient cursor-pointer" onClick={handleDelete}>
            Delete
          </p>
        </div>
      )}
    </div>
  );
};

export default PromptCard;
`}
            </Highlight>
          </details>
          <details>
            <summary>Provider.jsx</summary>
            <Highlight className="javascript">
              {`
이 코드는 NextAuth의 SessionProvider를 사용하여 세션 관리를 위한 커스텀 Provider인 Provider를 정의하고 있습니다.
이러한 Provider 구성을 사용하면 해당 애플리케이션에서 세션을 효과적으로 관리할 수 있습니다. 
Provider로 감싸진 컴포넌트들은 세션 정보에 쉽게 접근할 수 있게 되며, 이를 통해 로그인 상태 등을 관리할 수 있습니다.

Provider 컴포넌트
- Provider 컴포넌트는 SessionProvider를 사용하여 세션을 관리하는 역할을 합니다.
- children은 Provider로 감싸인 자식 컴포넌트들을 나타냅니다.
- session은 NextAuth의 세션 정보입니다.

SessionProvider 사용
- SessionProvider는 NextAuth에서 제공하는 React 컴포넌트로, 세션을 관리하는 데 사용됩니다.
- 세션 정보는 session 프롭스를 통해 전달됩니다.

'use client';

import { SessionProvider } from 'next-auth/react';

const Provider = ({ children, session }) => <SessionProvider session={session}>{children}</SessionProvider>;

export default Provider;

`}
            </Highlight>
          </details>
        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <h3>Model(스키마 생성)</h3>
          <details>
            <summary>prompt.js</summary>
            <Highlight className="javascript">
              {`
Mongoose를 사용하여 MongoDB에 저장되는 AI 프롬프트 모델을 정의하는 부분입니다.
AI 프롬프트에는 작성자(creator), 내용(prompt), 그리고 태그(tag)와 같은 필드들이 포함되어 있습니다.

Mongoose import
- MongoDB와 상호 작용하기 위해 몽구스에서 제공하는 Schema와 model을 임포트합니다.

프롬프트 스키마 정의
- PromptSchema는 AI 프롬프트의 몽구스 스키마입니다.
- creator 필드는 유저의 ObjectId를 참조하며, 'User' 모델과 연결됩니다.
- prompt 필드는 AI 프롬프트 내용을 나타내는 문자열입니다. required 속성을 통해 필수 항목임을 정의합니다.
- tag 필드는 프롬프트의 태그를 나타내는 문자열입니다. 역시 required 속성을 사용하여 필수 항목임을 정의합니다.

모델 생성 또는 가져오기
- models.Prompt가 이미 존재하면 해당 모델을 사용하고, 그렇지 않으면 새로운 모델을 생성합니다.
- model 함수를 사용하여 'Prompt'라는 모델을 정의하고, 해당 모델을 Prompt 상수에 할당합니다.

모델 내보내기
- 정의한 Prompt 모델을 외부에서 사용할 수 있도록 내보냅니다.

import { Schema, model, models } from 'mongoose';

const PromptSchema = new Schema({
  creator: {
    type: Schema.Types.ObjectId,
    ref: 'User',
  },
  prompt: {
    type: String,
    required: [true, 'Prompt is required.'],
  },
  tag: {
    type: String,
    required: [true, 'Tag is required.'],
  },
});

const Prompt = models.Prompt || model('Prompt', PromptSchema);

export default Prompt;

`}
            </Highlight>
          </details>
          <details>
            <summary>user.js</summary>
            <Highlight className="javascript">
              {`
이 코드는 MongoDB에서 사용자 정보를 저장하고 조회하기 위한 몽구스 모델을 정의한 것입니다.
사용자 모델에는 이메일, 유저네임, 프로필 이미지 URL과 같은 필드들이 정의되어 있습니다.

Mongoose import
- MongoDB와 상호 작용하기 위해 몽구스에서 제공하는 Schema와 model을 임포트합니다.

사용자 스키마 정의
- UserSchema는 사용자의 몽구스 스키마입니다.
- email 필드는 문자열로, 중복을 허용하지 않도록 unique 속성이 설정되어 있습니다. 또한 필수 항목임을 required 속성으로 정의합니다.
- username 필드는 문자열로, 유효성 검사를 위한 match 속성이 설정되어 있습니다. 유저네임은 특정 패턴을 따라야 하며 중복을 허용하지 않습니다.
- image 필드는 사용자 프로필 이미지의 URL을 나타내는 문자열입니다.

모델 생성 또는 가져오기
- models.User가 이미 존재하면 해당 모델을 사용하고, 그렇지 않으면 새로운 모델을 생성합니다.
- model 함수를 사용하여 'User'라는 모델을 정의하고, 해당 모델을 User 상수에 할당합니다.

모델 내보내기
- 정의한 User 모델을 외부에서 사용할 수 있도록 내보냅니다.

import { Schema, model, models } from 'mongoose';

const UserSchema = new Schema({
  email: {
    type: String,
    unique: [true, 'Email already exists!'],
    required: [true, 'Email is required!'],
  },
  username: {
    type: String,
    required: [true, 'Username is required!'],
    match: [
      /^(?=.{2,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._가-힣]+(?<![_.])$/,
      'Username invalid, it should contain 2-20 alphanumeric or Korean letters and be unique!',
    ],
  },
  image: {
    type: String,
  },
});

const User = models.User || model('User', UserSchema);

export default User;

`}
            </Highlight>
          </details>
        </p>
      </div>
      <div className="item__inner">
        <p className="desc">
          <h3>Utils</h3>
          <details>
            <summary>database.js</summary>
            <Highlight className="javascript">
              {`
이 코드는 MongoDB 데이터베이스에 연결하기 위한 MongoDB와 Mongoose를 사용하는 코드입니다. 
주요 목적은 connectToDB 함수를 통해 MongoDB에 연결하고, 연결이 이미 수립되어 있으면 추가적인 연결 시도를 피하기 위해 isConnected 변수를 사용합니다.

Mongoose import
- MongoDB와 상호 작용을 위해 Mongoose를 임포트합니다.

isConnected 변수
- MongoDB 연결 상태를 추적하는 변수입니다. 이미 연결되어 있는지 여부를 확인하여 중복 연결을 방지합니다.

connectToDB 함수
- connectToDB 함수는 MongoDB에 연결하는 비동기 함수입니다.
- mongoose.set('strictQuery', true);를 통해 엄격한 쿼리 모드를 설정합니다.
- isConnected 변수를 확인하여 이미 연결되어 있으면 함수를 종료하고 로그를 출력합니다.
- mongoose.connect를 사용하여 MongoDB에 연결을 시도하고, 연결 옵션들을 설정합니다.
- 연결이 성공하면 isConnected를 true로 설정하고 연결 성공 로그를 출력합니다.
- 연결 실패 시 에러를 콘솔에 출력합니다.

환경 변수 사용
- process.env.MONGODB_URI를 통해 MongoDB 연결 URI를 사용합니다.
- dbName: 'share_prompt'은 연결할 데이터베이스의 이름을 나타냅니다.

import mongoose from 'mongoose';

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set('strictQuery', true);

  if (isConnected) {
    console.log('MongoDB is already connected');
    return;
  }

  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      dbName: 'share_prompt',
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    isConnected = true;

    console.log('MongoDB connected');
  } catch (error) {
    console.log(error);
  }
};
`}
            </Highlight>
          </details>
        </p>
      </div>
    </div>
  );
};

export default Promdesc;
