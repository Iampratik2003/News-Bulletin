#include<bits/stdc++.h>
#include<vector>
#define pb push_back
#define ll long long
#define minn *min_element
#define maxx *max_element
using namespace std;

vector<int> dis(1e9,1e9),ways(1e9,0);
vector<ll> adj[1e6];


void dfs(int x, int r=-1)
{
    if(adj[x].size()==1 && x!=1)
    {
        ways[x]=1;
    }
    for(auto it : adj[x])
    {
        if(it!=r)
        {
            dfs(it,x);
            ways[x]=ways[x]+ways[it];
        }
        
    }
}

void solve()
{
     int n;
    cin>>n;
    
    for(int i=0;i<n-1;i++)
    {
        ll u,v;
        cin>>u>>v;
        adj[v].pb(u);
        adj[u].pb(v);
    }

    vector<int> vis(n+1,0);
    int inDegree[n+1]={0};
    // for(int i=1;i<=n;i++)
    // {
    //     for(auto it : adj[i])
    //     {
    //         inDegree[it]++;
    //     }
    // }
    vector<int> v;
    for(int i=2;i<=n;i++)
    {
        if(inDegree[i]==1)
        {
            v.pb(i);
        }
    }


    
        dis[0]=0;
        ways[0]=1;
        dfs(1);

        

    // q.push(1);
    // while(!q.empty())
    // {
    //     int node=q.front();
    //     q.pop();
    //     for(auto it: adj[node])
    //     {

    //     }
    // }






    int q;
    cin>>q;
    for(int i=0;i<q;i++)
    {
        int u,v;
        cin>>u>>v;
        cout<<ways[u]*ways[v]<<endl;
    }
}

int main()
{
    int t;
    cin>>t;
    while(t--)
    {
        solve();
    }
    return 0;
}